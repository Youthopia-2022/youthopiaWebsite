import { Link } from "react-router-dom";
import EventCards from "../../components/eventCard/EventCards";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
const HomePage = () => {
  return (
    <div>
		<div className="container px-10 py-10  mx-auto">

      <div className="flex flex-wrap w-full">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 color">
            Top events happening
          </h1>
          {/* <div className="h-1 w-20 bg-indigo-500 rounded"></div> */}
        </div>
        <button className="flex ml-auto text-white bgu bd py-2 px-6 focus:outline-none ">
          Registrations Starting Soon
        </button>
      </div>
	  <EventCards></EventCards>
	  <div className="more">
		Explore More Events
	  </div>
	  </div>
    </div>
  );
};

export default HomePage;
