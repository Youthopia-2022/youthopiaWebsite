import { Link } from "react-router-dom";
import "./EventCard.css";
const EventCard = (props) => {
	return (
		<div className="EventCard">
			<h3>{props.title}</h3>
			<img src={props.image} alt="" />
			<p>{props.description}</p>
			<Link to="/events/sampleEvent">
				<button>More Details</button>
			</Link>
		</div>
	);
};

export default EventCard;
