import EventsWrapper from "./EventsWrapper";
import "./EventCard.css";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="container px-10 py-10 mx-auto">
      <div className="flex flex-wrap w-full">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#1BBEE9]">
            Top events happening
          </h1>
        </div>
        <Link to="/events" className="flex ml-auto text-white bgu bd py-3 px-6 focus:outline-none ">
          REGISTER NOW
        </Link>
      </div>
      <EventsWrapper />
      <Link to="/events">
      <div className="more">Explore More Events</div>
      </Link>
    </div>
  );
};

export default Events;
