import { Link } from "react-router-dom";

const EventDetails = () => {
	return (
		<div>
			<h1>This is event Details page</h1>
			<ul>
				<li>Display all details of event</li>
				<li>can register to event from here</li>
			</ul>
			<Link to="/events">
				<button>Back to events</button>
			</Link>
		</div>
	);
};

export default EventDetails;
