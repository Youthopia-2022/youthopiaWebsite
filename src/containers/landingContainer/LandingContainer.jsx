import { Link } from "react-router-dom";
import ditLogo from "../../images/ditLogo.png";
import hands from "../../images/hands.png";
import googlePlay from "../../images/googlePlay.png";
import scrollDownIcon from "../../images/scrollDownIcon.png";
import "./LandingContainer.css";
import { useEffect } from "react";

const LandingContainer = () => {
	useEffect(() => {
		let vh = window.innerHeight;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	}, []);

	return (
		<div className="LandingContainer">
			<a
				href="https://www.dituniversity.edu.in/"
				target="_blank"
				rel="noopener noreferrer"
				className="ditLogo"
			>
				<img src={ditLogo} alt="" />
			</a>

			<div className="youthopiaLogo">
				<img src={hands} alt="" />
				<div>
					<p>17th-19th</p>
					<p>November</p>
				</div>
				<Link to="/" style={{ zIndex: 1 }}>
					<div className="registerButton mb-5 z-10">
						Registrations Starting Soon
					</div>
				</Link>
			</div>

			<img
				src={scrollDownIcon}
				className="absolute bottom-[1rem] w-[3rem] h-[3rem]"
				alt=""
			/>
			<div className="googlePlay absolute bottom-[1rem] right-[1rem]">
				<img src={googlePlay} alt="" />
			</div>
		</div>
	);
};

export default LandingContainer;
