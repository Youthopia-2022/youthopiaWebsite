import { useEffect, useState } from "react";
import EventCard from "../../components/EventsRoot/EventCard";
import "@fontsource/ibm-plex-sans";
import "./EventsPage.css";
import { useLocation } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import Loader from "../../components/Loader/Loader";

const EventsPage = () => {
  const [data, setData] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");
  const [loading, setLoading] = useState(false);

  const { search } = useLocation(); // using location object to get the query params

  // fetching events data from supabase
  const getData = async () => {
    try {
      setLoading(true);
      const { data, error, status } = await supabase.from("events").select("*");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setData(data);
        setFilteredData(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if(data){
      if (search !== "") {
        let tabName = search.split("?")[1];

        if (tabName === "evt") {
          filterEvents("Technical");
          console.log("object");
        } else if (tabName === "evc") {
          filterEvents("Cultural");
        } else if (tabName === "evd") {
          filterEvents("Literary");
        } else if (tabName === "evi") {
          filterEvents("Informal");
        } else if (tabName === "evfa") {
          filterEvents("Fine Arts");
        }
      }
    }

    // eslint-disable-next-line
  }, [data]);

  // filtering the data based on the selected tab
  const filterEvents = (tab) => {
    setSelectedTab(tab);
    if (tab === "All") {
      setFilteredData(data);
      return;
    }

    const result = data.filter((curData) => curData.event_category === tab);

    setFilteredData(result);

    if (search !== "") {
      window.history.pushState({}, "", "/events"); // resetting the state of url to default
    }
  };

  return (
    <div className="pb-10">
      <div className="eventheader">
        <button
          className={selectedTab === "All" ? "active" : "" }
          onClick={() => filterEvents("All")}
        >
          All
        </button>
        <button
          className={selectedTab === "Technical" ? "active" : ""}
          onClick={() => filterEvents("Technical")}
        >
          Technical
        </button>
        <button
          className={selectedTab === "Cultural" ? "active" : ""}
          onClick={() => filterEvents("Cultural")}
        >
          Cultural
        </button>
        <button
          className={selectedTab === "Informal" ? "active" : ""}
          onClick={() => filterEvents("Informal")}
        >
          Informal
        </button>
        <button
          className={selectedTab === "Literary" ? "active" : ""}
          onClick={() => filterEvents("Literary")}
        >
          Literary
        </button>
        <button
          className={selectedTab === "Fine Arts" ? "active" : ""}
          onClick={() => filterEvents("Fine Arts")}
        >
          Fine Arts
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="allEvents">
          {filteredData &&
            filteredData.map((event, id) => {
              return (
                <EventCard
                  key={id}
                  name={event.event_name}
                  image={
                    event.event_image
                      ? event.event_image
                      : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
                  }
                  location={event.event_venue}
                  startTime={event.event_startTime}
                  endTime={event.event_endTime}
                  price={event.event_fees}
                  date={event.event_date}
                  link={`${
                    event.event_category === "Technical"
                      ? "evt"
                      : event.event_category === "Literary"
                      ? "evd"
                      : event.event_category === "Informal"
                      ? "evi"
                      : event.event_category === "Fine Arts"
                      ? "evfa"
                      : "evc"
                  }/${event.event_id}`}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
