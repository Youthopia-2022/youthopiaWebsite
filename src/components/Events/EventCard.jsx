import "./EventCard.css";
import "@fontsource/ibm-plex-sans";
const EventCard = (props) => {
  return (
    <div className="EventCard">
      <div className="imagee">
        <img src={props.image} alt="" />
      </div>
      <div className="r1">
        <div className="location">{props.location}</div>
        <div className="datee">{props.date}</div>
      </div>
      <div className="r2">
        <div className="price">{props.price}</div>
        <div className="timee">{props.time}</div>
      </div>
      <div className="r3">
        <div className="namee">{props.name}</div>
        <div className="buttonn">Register Now</div>
      </div>
    </div>
  );
};

export default EventCard;
