import { useEffect, useState } from "react";
import EventCard from "../../components/EventsRoot/EventCard";
import "@fontsource/ibm-plex-sans";
import "./EventsPage.css";
import { useLocation } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const EventsPage = () => {
  const [data, setData] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const [isActivet, setIsActivet] = useState(false);
  const [isActivec, setIsActivec] = useState(false);
  const [isActivei, setIsActivei] = useState(false);
  const [isActived, setIsActived] = useState(false);
  const [isActiveal, setIsActiveal] = useState(true);
  const [isActivefa, setIsActivefa] = useState(false);
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
    if (search !== "") {
      let tabName = search.split("?")[1];

      if (tabName === "evt") {
        handleClickTe("evt");
      } else if (tabName === "evc") {
        handleClickCu("evc");
      } else if (tabName === "evd") {
        handleClickDe("evd");
      } else if (tabName === "evi") {
        handleClickIn("evi");
      } else if (tabName === "evfa") {
        handleClickFa("evfa");
      }
    }
    getData();
    // eslint-disable-next-line
  }, []);

  const handleClickAl = () => {
    setIsActiveal((current) => true);
    setIsActivet((current) => false);
    setIsActivec((current) => false);
    setIsActivei((current) => false);
    setIsActived((current) => false);
    setIsActivefa((current) => false);

    setFilteredData(data);
    if (search !== "") {
      window.history.pushState({}, "", "/events"); // resetting the state of url to default
    }
  };
  const handleClickTe = (catItem) => {
    setIsActivet((current) => true);
    setIsActivec((current) => false);
    setIsActivei((current) => false);
    setIsActived((current) => false);
    setIsActiveal((current) => false);
    setIsActivefa((current) => false);

    const result = data.filter((curData) => {
      return curData.event_category === catItem;
    });
    setFilteredData(result);
    if (search !== "") {
      window.history.pushState({}, "", "/events"); // resetting the state of url to default
    }
  };
  const handleClickCu = (catItem) => {
    setIsActivec((current) => true);
    setIsActivet((current) => false);
    setIsActivei((current) => false);
    setIsActived((current) => false);
    setIsActiveal((current) => false);
    setIsActivefa((current) => false);

    const result = data.filter((curData) => {
      return curData.event_category === catItem;
    });
    setFilteredData(result);
    if (search !== "") {
      window.history.pushState({}, "", "/events"); // resetting the state of url to default
    }
  };
  const handleClickIn = (catItem) => {
    setIsActivei((current) => true);
    setIsActivec((current) => false);
    setIsActivet((current) => false);
    setIsActived((current) => false);
    setIsActiveal((current) => false);
    setIsActivefa((current) => false);

    const result = data.filter((curData) => {
      return curData.event_category === catItem;
    });
    setFilteredData(result);
    if (search !== "") {
      window.history.pushState({}, "", "/events"); // resetting the state of url to default
    }
  };
  const handleClickDe = (catItem) => {
    setIsActived((current) => true);
    setIsActivei((current) => false);
    setIsActivet((current) => false);
    setIsActivec((current) => false);
    setIsActiveal((current) => false);
    setIsActivefa((current) => false);

    const result = data.filter((curData) => {
      return curData.event_category === catItem;
    });
    setFilteredData(result);
    if (search !== "") {
      window.history.pushState({}, "", "/events"); // resetting the state of url to default
    }
  };

  const handleClickFa = (catItem) => {
    setIsActiveal((current) => false);
    setIsActivet((current) => false);
    setIsActivec((current) => false);
    setIsActivei((current) => false);
    setIsActived((current) => false);
    setIsActivefa((current) => true);

    const result = data.filter((curData) => {
      return curData.event_category === catItem;
    });
    setFilteredData(result);
    if (search !== "") {
      window.history.pushState({}, "", "/events"); // resetting the state of url to default
    }
  };

  return (
    <div>
      <div>
        <div className="eventheader">
          <button
            className={isActiveal ? "active" : ""}
            onClick={() => handleClickAl("All")}
          >
            All
          </button>
          <button
            className={isActivet ? "active" : ""}
            onClick={() => handleClickTe("Technical")}
          >
            Technical
          </button>
          <button
            className={isActivec ? "active" : ""}
            onClick={() => handleClickCu("Cultural")}
          >
            Cultural
          </button>
          <button
            className={isActivei ? "active" : ""}
            onClick={() => handleClickIn("Informal")}
          >
            Informal
          </button>
          <button
            className={isActived ? "active" : ""}
            onClick={() => handleClickDe("Literary")}
          >
            Literary
          </button>
          <button
            className={isActivefa ? "active" : ""}
            onClick={() => handleClickFa("Fine Arts")}
          >
            Fine Arts
          </button>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default EventsPage;
