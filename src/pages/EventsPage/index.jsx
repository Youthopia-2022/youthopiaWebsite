import { useState } from "react";
import EventCard from "../../components/Events/EventCard";
import dummyData from "./dummyData.json";
// import "@fontsource/ibm-plex-sans";
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
  return (
    <div>
      <div>
        <div className="mainheader">This is main header</div>
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
            onClick={() => handleClickCu("CULTURAL")}
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
            onClick={() => handleClickDe("Debate")}
          >
            Debate
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
