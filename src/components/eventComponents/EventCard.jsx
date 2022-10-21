import "./EventCard.css";
import "@fontsource/ibm-plex-sans";
const EventCard = (props) => {
  return (
    <div className="EventCard">
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="r1">
        <div className="location">{props.location}</div>
        <div className="date">{props.date}</div>
      </div>
      <div className="r2">
        <div className="price">{props.price}</div>
        <div className="time">{props.time}</div>
      </div>
      <div className="r3">
        <div className="name">{props.name}</div>
        <div className="button">Register Now</div>
      </div>
    </div>
  );
};

export default EventCard;
