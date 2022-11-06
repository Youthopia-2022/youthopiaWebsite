import "./EventCard.css";
import "@fontsource/ibm-plex-sans";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const EventCard = (props) => {
  const {
    image,
    location,
    date,
    fees_dit,
    startTime,
    endTime,
    name,
    link,
    fees_outsiders,
  } = props;

  return (
    <div className="EventCardd">
      <div className="imagee">
        <img src={image} alt="" />
      </div>
      <div className="r1">
        <div className="namee capitalize">{name}</div>
        <div className="datee font-semibold">{date}</div>
      </div>
      <div className="r2">
        <div className="pricee">
          ₹ {fees_dit === "0" ? fees_outsiders : fees_dit}
        </div>

        <div className="timee">
          {moment(startTime, "hh:mm a").format("hh:mm a")}
          {" - "}
          {moment(endTime, "hh:mm a").format("hh:mm a")}
        </div>
      </div>
      <div className="r3">
        <div className="locationn capitalize">{location}</div>
        <Link to={link}>
          <div className="buttonn rounded-xl">Register Now</div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
