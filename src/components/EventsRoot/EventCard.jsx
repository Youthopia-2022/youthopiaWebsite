import "./EventCard.css";
import "@fontsource/ibm-plex-sans";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const EventCard = (props) => {
  const { image, location, date, price, startTime, endTime, name, link } =
    props;

  return (
    <div className="EventCardd">
      <div className="imagee">
        <img src={image} alt="" />
      </div>
      <div className="r1">
        <div className="locationn capitalize">{location}</div>
        <div className="datee font-semibold">
          {moment(date).format("DD-MM-YYYY")}
        </div>
      </div>
      <div className="r2">
        <div className="pricee">₹{price}</div>
        <div className="timee">
          {moment(startTime, "HH:mm:ss").format("hh:mm a")}
          {" - "}
          {moment(endTime, "HH:mm:ss").format("hh:mm a")}
        </div>
      </div>
      <div className="r3">
        <div className="namee capitalize">{name}</div>
        <Link to={link}>
          <div className="buttonn">Register Now</div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
