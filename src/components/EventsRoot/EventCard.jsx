import "./EventCard.css";
import "@fontsource/ibm-plex-sans";
import { Link } from "react-router-dom";
const EventCard = (props) => {
  return (
    <div className="EventCardd">
      <div className="imagee">
        <img src={props.image} alt="" />
      </div>
      <div className="r1">
        <div className="locationn">{props.location}</div>
        <div className="datee">{props.date}</div>
      </div>
      <div className="r2">
        <div className="pricee">{props.price}</div>
        <div className="timee">{props.time}</div>
      </div>
      <div className="r3">
        <div className="namee">{props.name}</div>
        <Link to={props.Link}>
          <div className="buttonn">Register Now</div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
