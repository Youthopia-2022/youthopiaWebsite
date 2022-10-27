import "./register.css";
import RegisterIndv from "./RegisterIndv";
import RegisterIndvdit from "./RegisterIndvdit";
import "./register.css";
import { useState } from "react";
import Registerteamdit from "./Registerteamdit";
import Registerteam from "./Registerteam";

const EventRegisterForm = (props) => {
	const [isTeam, setisTeam] = useState(false);
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
				props.isDit ? (
					<Registerteamdit />
				) : (
					<Registerteam />
				)
			) : props.isDit ? (
				<RegisterIndvdit />
			) : (
				<RegisterIndv />
			)}
		</>
	);
};

export default EventRegisterForm;
