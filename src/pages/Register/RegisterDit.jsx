import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import registerbackground from "../../images/registerbackground.png";
import dummyData from "../../pages/EventsPage/dummyData.json";
import ScrollReveal from "scrollreveal";
import EventRegisterForm from "../../components/eventRegisteForm/EventRegisterForm";
import "./Register.css";

const RegisterDit = () => {
	const { name } = useParams();
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
	}, []);
	return (
		<>
			{dummyData
				.filter((items) => items.name === name)
				.map((items) => (
					<div
						className="ResigterContainer"
						style={{
							backgroundImage: `url(${registerbackground})`,
						}}
					>
						<div className="ResigterContainerChild">
							<div className="registerforu">
								<div className="ResigterImage">
									<img src={items.imag} alt="" />
								</div>
								<div className="ResigterDetails">
									<div className="ResigterDetailsTop">
										<div className="ResigterTitle">{items.name}</div>
										<div className="ResigterInfo">
											<div>
												<div></div>
												<p>{items.location ? items.location : "Unknown"}</p>
											</div>
											<div>
												<div></div>
												<p>{items.date ? items.date : "unknown"}</p>
											</div>
											<div>
												<div></div> <p>{items.time ? items.time : "unknown"}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<EventRegisterForm isDit={true} />
							</div>
						</div>
					</div>
				))}
		</>
	);
};
export default RegisterDit;
