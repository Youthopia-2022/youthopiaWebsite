import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import registerbackground from "../../images/registerbackground.webp";
import ScrollReveal from "scrollreveal";
import EventRegisterForm from "../../components/eventRegisteForm/EventRegisterForm";
import { useState } from "react";
import "./Register.css";
import { supabase } from "../../supabaseClient";
import moment from "moment";
import Loader from "../../components/Loader/Loader";

const RegisterDit = () => {
	const { id } = useParams();
	const [data, setData] = useState("");
	const [loading, setLoading] = useState(false);

	// fetching event data from supabase through event id
	const getData = async () => {
		try {
			setLoading(true);
			const { data, error, status } = await supabase
				.from("events")
				.select("*")
				.ilike("event_id", id);

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				setData(data);
			}
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
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
		// sr.reveal(`.RegisterFormQuestionButtons`, { origin: "bottom" });
		// sr.reveal(`.eventResgisterButton`, { origin: "bottom" });
		getData();    //eslint-disable-next-line
	}, []);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					{data &&
						data.map((items) => (
							<div
								className="ResigterContainer"
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
												<div className="ResigterTitle capitalize">
													{items.event_name}
												</div>
												<div className="ResigterInfo">
													<div>
														<div></div>
														<p className="capitalize">
															{items.event_venue ? items.event_venue : "N/A"}
														</p>
													</div>
													<div>
														<div></div>
														<p className="capitalize">{items.event_date}</p>
													</div>
													<div>
														<div></div>
														<p>
															{moment(items.event_startTime, "hh:mm a").format(
																"hh:mm a"
															)}
															{" - "}
															{moment(items.event_endTime, "hh:mm a").format(
																"hh:mm a"
															)}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div>
										<EventRegisterForm
											isDit={true}
											isTeam={items.event_isTeam}
											id={id}
										/>
									</div>
								</div>
							</div>
						))}
				</>
			)}
		</>
	);
};
export default RegisterDit;
