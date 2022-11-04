import image from "../../images/gimage1-min.webp";
import logo1 from "../../images/WhiteLogo.png";
import logo2 from "../../images/ditWhite.png";
import logo3 from "../../images/YouthopiaLogo.svg";
import "./CountDown.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountDown = () => {

	const [expiryTime, setExpiryTime] = useState("17 nov 2022 09:00:00");
	const [countdownTime, setCountdownTime] = useState({
		countdownDays: "",
		countdownHours: "",
		countdownlMinutes: "",
		countdownSeconds: "",
	});

	const countdownTimer = () => {
		const timeInterval = setInterval(() => {
			const countdownDateTime = new Date(expiryTime).getTime();
			const currentTime = new Date().getTime();
			const remainingDayTime = countdownDateTime - currentTime;
			const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
			const totalHours = Math.floor(
				(remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const totalMinutes = Math.floor(
				(remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
			);
			const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

			const runningCountdownTime = {
				countdownDays: totalDays,
				countdownHours: totalHours,
				countdownMinutes: totalMinutes,
				countdownSeconds: totalSeconds,
			};

			setCountdownTime(runningCountdownTime);

			if (remainingDayTime < 0) {
				clearInterval(timeInterval);
				setExpiryTime(false);
			}
		}, 1000);
	};

	useEffect(() => {
		countdownTimer();
	});

	return (
		<div className=" w-full flex flex-col justify-center items-center mb-[2rem]">
			<div className="countDownContent w-[75vw]">
				<div className="topBar w-[100%] flex items-center justify-between">
					<div className="topBarLeft bg-[#1A1A1A] flex items-center justify-center px-[1.5rem] h-[3rem] text-[#1BBEE9]">
						<p>YOUTHOPIA BEGINS IN</p>
					</div>
					<div className="topBarCounter flex gap-[1px] bg-[#2B2929]">
						<div className="days bg-[#1A1A1A] flex items-center h-[3rem] justify-center w-[5rem]">
							<p className="text-[#1BBEE9] mr-[5px]">
								{countdownTime.countdownDays}
							</p>
							<p className="text-white text-[0.8rem]">DAYS</p>
						</div>
						<div className="hours bg-[#1A1A1A] flex items-center h-[3rem] justify-center w-[5rem]">
							<p className="text-[#1BBEE9] mr-[5px]">
								{countdownTime.countdownHours}
							</p>
							<p className="text-white text-[0.8rem]">HOURS</p>
						</div>
						<div className="mins bg-[#1A1A1A] flex items-center h-[3rem] justify-center w-[5rem]">
							<p className="text-[#1BBEE9] mr-[5px]">
								{countdownTime.countdownMinutes}
							</p>
							<p className="text-white text-[0.8rem]">MINS</p>
						</div>
						<div className="mins bg-[#1A1A1A] flex items-center h-[3rem] justify-center w-[5rem]">
							<p className="text-[#1BBEE9] mr-[5px]">
								{countdownTime.countdownSeconds}
							</p>
							<p className="text-white text-[0.8rem]">SEC</p>
						</div>
					</div>
				</div>
				<div className="coutDownImage w-[100%]">
					<img src={image} className="w-[100%] px-[4rem]" alt="" />
					<div className="countDownImageContent flex flex-col">
						<div className="flex justify-between gap-[3rem]">
							<p className="text-justify">
								Surrender your typical, boring college life. Mark the dates
								because Youthopia'22 is making a comeback at DIT University. An
								annual techno-cultural event binds tech geeks and cultural
								artists in circumstances where talents will be uncovered,
								revealing entirely different euphoric individuals.This fest has
								excelled into a full-blown divinity where 7890+ students from
								the host university and 3000+ students from other universities
								set out in an ideal environment of competitive fervor and
								endless vitality. Youthopia'22 will be an exhibition of events
								that not only covers a vast amount of entertainment but also
								showcases your technical talent as well. This lit fest will be
								enclosed within the campus, and all the talents will not only be
								recognized but rewarded as well.
							</p>
							<div className="flex justify-center items-center mr-[1rem] gap-[1rem]">
								<img src={logo1} alt="" className="w-[3rem]" />
								<img src={logo2} alt="" className="ditLogoCD w-[40rem]" />
							</div>
						</div>
						<Link to="./events">
							<button className="CountDownButton">REGISTER NOW</button>
						</Link>
						<div className="Ylogo">
							<img src={logo3} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountDown;
