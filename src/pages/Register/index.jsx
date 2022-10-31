import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import registerbackground from "../../images/registerbackground.png";
import dummyData from "../../pages/EventsPage/dummyData.json";
import ScrollReveal from "scrollreveal";
import "./Register.css";

const Register = () => {
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
		sr.reveal(`.RegisterFormQuestionButtons`, { origin: "bottom" });
		// sr.reveal(`.eventResgisterButton`, { origin: "bottom" });
	}, []);

	return (
		<>
			{dummyData
				.filter((items) => items.name === name)
				.map((items) => (
					<div
						className="ResigterContainer maxRegister"
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
