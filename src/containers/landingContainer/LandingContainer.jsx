import { Link } from "react-router-dom";
import ditLogo from "../../images/ditLogo.png";
import hands from "../../images/hands.png";
// import scrollDownIcon from "../../images/scrollDownIcon.png";
import "./LandingContainer.css";
import { useEffect } from "react";
import { Fade, Zoom } from "react-reveal";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
	distance: "60px",
	reset: false,
	duration: 1200,
});

const LandingContainer = () => {
	useEffect(() => {
		sr.reveal(".landingPageDitLogo", {
			origin: "top",
		});
		sr.reveal(".youthopiaDetails", {
			origin: "bottom",
		});
		sr.reveal(".registerButton", {
			origin: "bottom",
		});
		sr.reveal(" .scrollDownButton", {
			origin: "bottom",
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
						<img src={hands} alt="" className="md:mt-10 youthopiaLogoLC" />
					</Zoom>
				</Fade>

				<div className="youthopiaDetails mb-[1rem]">
					<p>17th-19th NOVEMBER</p>
					<p>2022</p>
				</div>
				<Link to="/events" style={{ zIndex: 1 }}>
					<div className="registerButton mb-5 z-10">
						REGISTER NOW
					</div>
				</Link>
				{/* <img
					src={scrollDownIcon}
					className="scrollDownButton mb-[1rem] mt-[2rem] w-[3rem] h-[3rem]"
					alt=""
				/> */}
			</div>
		</div>
	);
};

export default LandingContainer;
