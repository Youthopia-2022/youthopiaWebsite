import LandingContainer from "../../containers/landingContainer/LandingContainer";
import Sponsers from "../../components/Sponsers";
import DjNight from "../../components/EventsRoot/DjNight";
import Events from "../../components/Events";
import CountDown from "../../containers/CountDown/CountDown";

const HomePage = () => {
	return (
		<>
			<LandingContainer />
			<Sponsers />
			<DjNight />
			<Events />
			<CountDown />
		</>
	);
};

export default HomePage;
