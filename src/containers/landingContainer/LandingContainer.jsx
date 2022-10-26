import { Link } from "react-router-dom";
import ditLogo from "../../images/ditLogo.png";
import hands from "../../images/hands.png";
import scrollDownIcon from "../../images/scrollDownIcon.png";
import "./LandingContainer.css";
import { useEffect } from "react";
import { Fade, Zoom } from "react-reveal";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
	distance: "60px",
	reset: false,
	duration: 1200,
	delay: 200,
});

const LandingContainer = () => {
	useEffect(() => {
		sr.reveal(".landingPageDitLogo", {
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".youthopiaDetails", {
			origin: "bottom",
			duration: 1500,
			delay: 1000,
			distance: "50px",
		});
		sr.reveal(".registerButton", {
			origin: "bottom",
			duration: 1500,
			delay: 1200,
			distance: "50px",
		});
		sr.reveal(".googlePlay, .scrollDownButton", {
			origin: "bottom",
			duration: 1500,
			delay: 1400,
			distance: "50px",
		});
	}, []);

	return (
		<div className="LandingContainer">
			<a
				href="https://www.dituniversity.edu.in/"
				target="_blank"
				rel="noopener noreferrer"
				className="ditLogo"
			>
				<img src={ditLogo} className="landingPageDitLogo" alt="" />
			</a>

			<div className="youthopiaLogo">
				<Fade>
					<Zoom>
						<img src={hands} alt="" className="md:mt-10" />
					</Zoom>
				</Fade>

				<div className="youthopiaDetails mt-5">
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
				className="scrollDownButton absolute bottom-[1rem] w-[3rem] h-[3rem] mt-10"
				alt=""
			/>
		</div>
	);
};

export default LandingContainer;
