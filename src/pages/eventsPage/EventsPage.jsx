import { Link } from "react-router-dom";
import EventCard from "../../components/eventCard/EventCard";
import dummyData from "./dummyData.json";
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
				{dummyData.map((event, id) => {
					return (
						<EventCard
							key={id}
							title={event.title}
							image={event.image}
							description={event.description}
						/>
					);
				})}
			</div>

			<Link to="/">
				<button>Back to home</button>
			</Link>
		</div>
	);
};

export default EventsPage;
