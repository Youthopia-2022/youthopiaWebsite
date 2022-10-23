import LandingContainer from "../../containers/landingContainer/LandingContainer";
import Sponsers from "../../components/Sponsers";
import DjNight from "../../components/EventsRoot/DjNight";
const HomePage = () => {
  return (
    <>
      <LandingContainer />
      <Sponsers />
      <DjNight />
      {/* <Events /> */}
    </>
  );
};

export default HomePage;
