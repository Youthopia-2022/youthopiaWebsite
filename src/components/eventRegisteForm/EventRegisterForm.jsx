import "./EventRegisterForm.css";
import RegisterIndv from "./RegisterIndv";
import RegisterIndvdit from "./RegisterIndvdit";
import "./register.css";
import { useState } from "react";

const EventRegisterForm = () => {
	const [isTeam, setisTeam] = useState(false);
	const [isDit, setisDit] = useState(true);
	return (
		<>
			<div className="flex mt-[2rem] w-[100vw] items-center justify-center">
				<div className="formResponsive w-[75vw]">
					<div className="flex justify-around itmes-center w-[100%] h-[2rem] px-[2rem]">
						<p
							className={isTeam ? "registerSelected" : "registerNotSelected"}
							onClick={() => setisTeam(true)}
						>
							Team
						</p>
						<p
							className={!isTeam ? "registerSelected" : "registerNotSelected"}
							onClick={() => setisTeam(false)}
						>
							Individual
						</p>
					</div>
					<div className="w-[100%] h-[0px] border-t-[1px] border-white px-[2rem] "></div>
				</div>
			</div>
			{isTeam ? (
				isDit ? (
					"teamDit"
				) : (
					"teamNotDit"
				)
			) : isDit ? (
				<RegisterIndvdit />
			) : (
				<RegisterIndv />
			)}
		</>
	);
};

export default EventRegisterForm;
