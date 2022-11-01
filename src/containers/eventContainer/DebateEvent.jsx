import "./EventContainer.css";
import background from "../../images/debateEventBackground.webp";
import "./EventContainer.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { createClient } from "@supabase/supabase-js";

const TechnicalEvent = () => {
	const { name } = useParams();
	const [data, setdata] = useState("");

	//superbase Integration
	const supabaseUrl = "https://bwqibqbxbirzbyjqovco.supabase.co";
	const supabaseKey =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3cWlicWJ4YmlyemJ5anFvdmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2NDMxNTcsImV4cCI6MTk4MTIxOTE1N30.7TLUvzsw1-YI-G02oDJbsHHH7U5d1RS25-b-mLiXL6M";
	const supabase = createClient(supabaseUrl, supabaseKey);
	const getData = async () => {
		let { data: events_new, error } = await supabase
			.from("events_new")
			.select("*")
			.ilike("event_id", name);
		setdata(events_new);
		if (error) {
			console.log(error);
		}
	};

	useEffect((name) => {
		const sr = ScrollReveal({
			distance: "60px",
			reset: false,
			duration: 1200,
			delay: 500,
			origin: "bottom",
		});
		sr.reveal(`.eventImage`, { origin: "left" });
		sr.reveal(`.eventTitle`, { origin: "right" });
		sr.reveal(`.eventInfo`, { origin: "bottom" });
		sr.reveal(`.eventDescription`, { origin: "bottom" });
		// sr.reveal(`.eventResgisterButton`, { origin: "bottom" });

		getData();
	}, []);

	return (
		<>
			{data &&
				data.map((items, id) => (
					<div
						className="EventContainer"
						style={{
							backgroundImage: `url(${background})`,
						}}
						key={id}
					>
						<div className="EventContainerChild">
							<div className="eventImage">
								<img
									src={
										items.event_image
											? items.event_image
											: "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
									}
									alt="event"
								/>
							</div>
							<div className="eventDetails">
								<div className="eventDetailsTop">
									<div className="eventTitle">{items.event_name}</div>
									<div className="eventInfo">
										<div>
											<div></div>
											<p>{items.event_venue ? items.event_venue : "Unknown"}</p>
										</div>
										<div>
											<div></div>
											<p>{items.event_date ? items.event_date : "unknown"}</p>
										</div>
										<div>
											<div></div>{" "}
											<p>{items.event_time ? items.event_time : "unknown"}</p>
										</div>
									</div>
								</div>
								<div className="eventDescription">
									<p>{items.event_description}</p>
									<div>
										<div>
											<p>Event Coordinator: </p>
											<p>
												{items.event_coordinator
													? items.event_coordinator
													: "Unknown"}
											</p>
										</div>
										<div>
											<p>Over All Headr: </p>
											<p>
												{items.event_overall_head
													? items.event_overall_head
													: "Unknown"}
											</p>
										</div>
										<div>
											<p>Fees: </p>
											<p>{items.event_fees ? items.event_fees : "Unknown"}</p>
										</div>
									</div>
								</div>
								<Link to={`/register/${name}`}>
									<button className="eventResgisterButton">
										Resgister Now
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default TechnicalEvent;
