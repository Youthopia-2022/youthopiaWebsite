import { useEffect, useState } from "react";
import EventCard from "../../components/EventsRoot/EventCard";
import dummyData from "./dummyData.json";
// import { useLocation } from "react-router-dom";
import "@fontsource/ibm-plex-sans";
import "./EventsPage.css";

const EventsPage = () => {
  const [data, setData] = useState(dummyData);
  const [isActivet, setIsActivet] = useState(false);
  const [isActivec, setIsActivec] = useState(false);
  const [isActivei, setIsActivei] = useState(false);
  const [isActived, setIsActived] = useState(false);
  const [isActiveal, setIsActiveal] = useState(true);
  const handleClickAl = () => {
    setIsActiveal((current) => true);
    setIsActivet((current) => false);
    setIsActivec((current) => false);
    setIsActivei((current) => false);
    setIsActived((current) => false);
    setData(dummyData);
  };
  const handleClickTe = (catItem) => {
    setIsActivet((current) => true);
    setIsActivec((current) => false);
    setIsActivei((current) => false);
    setIsActived((current) => false);
    setIsActiveal((current) => false);

    const result = dummyData.filter((curData) => {
      return curData.Category === catItem;
    });
    setData(result);
  };
  const handleClickCu = (catItem) => {
    setIsActivec((current) => true);
    setIsActivet((current) => false);
    setIsActivei((current) => false);
    setIsActived((current) => false);
    setIsActiveal((current) => false);

    const result = dummyData.filter((curData) => {
      return curData.Category === catItem;
    });
    setData(result);
  };
  const handleClickIn = (catItem) => {
    setIsActivei((current) => true);
    setIsActivec((current) => false);
    setIsActivet((current) => false);
    setIsActived((current) => false);
    setIsActiveal((current) => false);

    const result = dummyData.filter((curData) => {
      return curData.Category === catItem;
    });
    setData(result);
  };
  const handleClickDe = (catItem) => {
    setIsActived((current) => true);
    setIsActivei((current) => false);
    setIsActivet((current) => false);
    setIsActivec((current) => false);
    setIsActiveal((current) => false);

    const result = dummyData.filter((curData) => {
      return curData.Category === catItem;
    });
    setData(result);
  };
  useEffect(() => {
    if (window.location.href === "http://localhost:3000/events/:t") {
      handleClickTe("evt");
    } else if (window.location.href === "http://localhost:3000/events/:c") {
      handleClickCu("evc");
    } else if (window.location.href === "http://localhost:3000/events/:d") {
      handleClickDe("evd");
    } else if (window.location.href === "http://localhost:3000/events/:i") {
      handleClickIn("evi");
    }
  });
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
            className={isActived ? "active" : ""}
            onClick={() => handleClickDe("evf")}
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
