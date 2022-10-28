import { useEffect, useState } from "react";
import EventCard from "../../components/EventsRoot/EventCard";
import dummyData from "./dummyData.json";
import "@fontsource/ibm-plex-sans";
import "./EventsPage.css";
import { useLocation } from "react-router-dom";

const EventsPage = () => {
  const [data, setData] = useState(dummyData);
  const [isActivet, setIsActivet] = useState(false);
  const [isActivec, setIsActivec] = useState(false);
  const [isActivei, setIsActivei] = useState(false);
  const [isActived, setIsActived] = useState(false);
  const [isActiveal, setIsActiveal] = useState(true);
  const [isActivefa, setIsActivefa] = useState(false);

  const { search } = useLocation(); // using location object to get the query params

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

    // eslint-disable-next-line
  }, []);

  const handleClickAl = () => {
    setIsActiveal((current) => true);
    setIsActivet((current) => false);
    setIsActivec((current) => false);
    setIsActivei((current) => false);
    setIsActived((current) => false);
    setIsActivefa((current) => false);

    setData(dummyData);
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

    const result = dummyData.filter((curData) => {
      return curData.Category === catItem;
    });
    setData(result);
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

    const result = dummyData.filter((curData) => {
      return curData.Category === catItem;
    });
    setData(result);
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

    const result = dummyData.filter((curData) => {
      return curData.Category === catItem;
    });
    setData(result);
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

    const result = dummyData.filter((curData) => {
      return curData.Category === catItem;
    });
    setData(result);
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

    const result = dummyData.filter((curData) => {
      return curData.Category === catItem;
    });
    setData(result);
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
            onClick={() => handleClickTe("evt")}
          >
            Technical
          </button>
          <button
            className={isActivec ? "active" : ""}
            onClick={() => handleClickCu("evc")}
          >
            Cultural
          </button>
          <button
            className={isActivei ? "active" : ""}
            onClick={() => handleClickIn("evi")}
          >
            Informal
          </button>
          <button
            className={isActived ? "active" : ""}
            onClick={() => handleClickDe("evd")}
          >
            Literary
          </button>
          <button
            className={isActivefa ? "active" : ""}
            onClick={() => handleClickFa("evfa")}
          >
            Fine Arts
          </button>
        </div>
      </div>
      <div>
        <div className="allEvents">
          {data.map((event, id) => {
            return (
              <EventCard
                key={id}
                name={event.name}
                image={event.imag}
                location={event.location}
                time={event.time}
                price={event.price}
                date={event.date}
                Link={`${event.Category}/${event.name}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
