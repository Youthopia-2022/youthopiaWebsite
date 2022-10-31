import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import registerbackground from "../../images/registerbackground.png";
import ScrollReveal from "scrollreveal";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import "./Register.css";

const Register = () => {
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

	useEffect(() => {
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
		sr.reveal(`.RegisterFormQuestionButtons`, { origin: "bottom" });
		// sr.reveal(`.eventResgisterButton`, { origin: "bottom" });
		getData();
	}, []);

	return (
		<>
			{data &&
				data.map((items) => (
					<div
						className="ResigterContainer maxRegister"
						style={{
							backgroundImage: `url(${registerbackground})`,
						}}
					>
						<div className="ResigterContainerChild">
							<div className="registerforu">
								<div className="ResigterImage">
									<img
										src={
											items.event_image
												? items.event_image
												: "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
										}
										alt="event"
									/>
								</div>
								<div className="ResigterDetails">
									<div className="ResigterDetailsTop">
										<div className="ResigterTitle">{items.event_name}</div>
										<div className="ResigterInfo">
											<div>
												<div></div>
												<p>
													{items.event_venue ? items.event_venue : "Unknown"}
												</p>
											</div>
											<div>
												<div></div>
												<p>{items.event_date ? items.event_date : "unknown"}</p>
											</div>
											<div>
												<div></div>
												<p>{items.event_time ? items.event_time : "unknown"}</p>
											</div>
											<div>
												<div></div>
												<p>
													{items.event_fees
														? "₹" + items.event_fees
														: "Unknown"}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="RegisterFormQuestionButtons">
								<Link to={`/registerdit/${name}`}>
									<div className="RegisterFormQuestionButton">
										<button className="">Yes</button>
									</div>
								</Link>
								<Link to={`/registeroutside/${name}`}>
									<div className="RegisterFormQuestionButton">
										<button className="">No</button>
									</div>
								</Link>
							</div>
						</div>
					</div>
				))}
		</>
	);
};
export default Register;
