import { Link } from "react-router-dom";
import EventCard from "../../components/Events/EventCard";
import { events } from "../../constants/dummyData";
import "./EventsPage.css";

const EventsPage = () => {
  return (
    <div>
      <h1>This is events page</h1>
      <ul>
        <li>
          This page will fetch all the events from server and display their
          cards.
        </li>
        <li>events can sorted or filtered with the options</li>
      </ul>

      <div className="allEvents">
        {events.map((item) => (
          <EventCard
            key={item.id}
            title={item.title}
            image={item.thumbnail}
            description={item.desc}
          />
        ))}
      </div>

      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
};

export default EventsPage;
