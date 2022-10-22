import EventsWrapper from "./EventsWrapper";
import "./EventCard.css";

const Events = () => {
  return (
    <div className="container px-10 py-10 mx-auto">
      <div className="flex flex-wrap w-full">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#1BBEE9]">
            Top events happening
          </h1>
        </div>
        <button className="flex ml-auto text-white bgu bd py-2 px-6 focus:outline-none ">
          Registrations Starting Soon
        </button>
      </div>
      <EventsWrapper />
      <div className="more">Explore More Events</div>
    </div>
  );
};

export default Events;