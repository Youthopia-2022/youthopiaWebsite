import { events } from "../../constants/dummyData";
import EventCard from "./EventCard";

const EventsWrapper = () => {
	return (
		<div className="EventCard">
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
						{events.map((item, id) => (
							<EventCard data={item} key={id} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default EventsWrapper;
