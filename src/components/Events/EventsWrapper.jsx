import EventCard from "./EventCard";
import ScrollReveal from "scrollreveal";
import { events } from "../../constants/dummyData";
import { useEffect } from "react";

const EventsWrapper = () => {
	useEffect(() => {
		const sr = ScrollReveal({
			distance: "60px",
			reset: false,
			duration: 1200,
			delay: 500,
			origin: "bottom",
		});
		sr.reveal(`.eventCardAnim`);
	}, []);
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
