import "./EventContainer.css";
import background from "../../images/technicalEventBackground.png";
import image from "../../images/image01.png";
import "./EventContainer.css";

const TechnicalEvent = (props) => {
	return (
		<div
			className="EventContainer"
			style={{
				backgroundImage: `url(${background})`,
			}}
		>
			<div className="EventContainerChild">
				<div className="eventImage">
					<img src={image} alt="" />
				</div>
				<div className="eventDetails">
					<div className="eventDetailsTop">
						<div className="eventTitle">Technical Event</div>
						<div className="eventInfo">
							<p>Vedanta Hall </p> <div></div> <p>21/21/2022</p> <div></div>{" "}
							<p>13:07</p>
						</div>
					</div>
					<div className="eventDescription">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
							dolor, placeat quidem deleniti quos repellat impedit voluptatem
							debitis deserunt sequi est, dolorum consequuntur. Tempora
							laudantium repellat architecto doloremque ratione eligendi
							similique eum, nemo sit. Quisquam officiis blanditiis consequuntur
							nemo quae?
						</p>
						<div>
							<div>
								<p>Event Coordinator: </p>
								<p>Some person</p>
							</div>
							<div>
								<p>Over All Headr: </p>
								<p>Some person</p>
							</div>
							<div>
								<p>Fees: </p>
								<p></p>
							</div>
						</div>
					</div>
					<button className="eventResgisterButton">Resgister Now</button>
				</div>
			</div>
		</div>
	);
};

export default TechnicalEvent;
