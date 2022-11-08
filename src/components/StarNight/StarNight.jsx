import st from "../../images/StarNight.png";
import st2 from "../../images/starNight2.png";
import "./StarNight.css";

const StartNight = () => {
	return (
		<div className="starNight">
			<img src={st} alt="" className="starNightImage" />
			<div className="starNightImage2">
				<img src={st2} alt="" />
			</div>
		</div>
	);
};

export default StartNight;
