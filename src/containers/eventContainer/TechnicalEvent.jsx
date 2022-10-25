import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./EventContainer.css";
import background from "../../images/technicalEventBackground.png";
import image from "../../images/image01.png";
import "./EventContainer.css";

const TechnicalEvent = (props) => {
	useEffect(() => {
		const sr = ScrollReveal({
			distance: "60px",
			reset: false,
			duration: 1200,
			delay: 500,
			origin: "bottom",
		});
		sr.reveal(`.eventImage`, { origin: "left" });
		sr.reveal(`.eventTitle`, { origin: "right", delay: 800 });
		sr.reveal(`.afterEventTitle`, { origin: "bottom", delay: 1100 });
		sr.reveal(`.eventDescription`, { origin: "bottom", delay: 1400 });
		sr.reveal(`.eventResgisterButton`, { origin: "bottom", delay: 1700 });
	}, []);
	return (
		<div
			className="bg-center bg-no-repeat bg-cover py-[2rem] flex justify-center items-center min-h-[80vh]"
			style={{
				backgroundImage: `url(${background})`,
			}}
		>
			<div className="EventContainerChild w-[100vw] flex flex-row justify-start p-[1rem]">
				<div className="eventImage w-[40%] flex justify-center items-center">
					<img src={image} alt="" className="w-[300px] min-w-[300px] rounded" />
				</div>
				<div className="eventDetails w-[60%] max-w-[800px] text-white flex flex-col mt-[0.15rem] pr-[1rem]">
					<div className="w-[max-content]">
						<div className="eventTitle font-bold text-[3.5rem]">
							Technical Event
						</div>
						<div className="afterEventTitle flex justify-between items-center w-[100%] mt-[1rem] text-[1.2rem] font-[500]">
							<p>Vedanta Hall </p>{" "}
							<div className="w-[10px] h-[10px] rounded-[50%] bg-white"></div>
							<p className="text-[#fc0160]">21/21/2022</p>
							<div className="w-[10px] h-[10px] rounded-[50%] bg-white"></div>
							<p>13:07</p>
						</div>
					</div>
					<div className="eventDescription mt-[2rem] flex items-start flex-col gap-[1rem]">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
							dolor, placeat quidem deleniti quos repellat impedit voluptatem
							debitis deserunt sequi est, dolorum consequuntur. Tempora
							laudantium repellat architecto doloremque ratione eligendi
							similique eum, nemo sit. Quisquam officiis blanditiis consequuntur
							nemo quae?
						</p>
						<div>
							<div className="flex text-[#1bbee9] gap-[0.5rem] leading-[1.2rem]">
								<p className="font-medium">Event Coordinator: </p>
								<p>Some person</p>
							</div>
							<div className="flex text-[#1bbee9] gap-[0.5rem] leading-[1.2rem]">
								<p className="font-medium">Over All Headr: </p>
								<p>Some person</p>
							</div>
							<div className="flex text-[#1bbee9] gap-[0.5rem] leading-[1.2rem]">
								<p className="font-medium">Fees: </p>
								<p></p>
							</div>
						</div>
					</div>
					<button className="eventResgisterButton border-[1px] border-solid border-[#fc0160] w-[9rem] h-[3rem] mt-[2rem]">
						Resgister Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default TechnicalEvent;
