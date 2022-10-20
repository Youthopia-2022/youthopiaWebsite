import { Link } from "react-router-dom";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";


const EventCards = (props) => {
	return (
		<div className="EventCard">

			<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 bgimgg">
          <img className="h-40  w-full object-cover object-center mb-6" src= {image1} alt="content"/>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Technical Event</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
		  <button className="flex ml-auto text bgu1 py-2 px-6 focus:outline-none butcss mb-5">Explore more</button>

        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6  bgimgg">
          <img className="h-40  w-full object-cover object-center mb-6" src={image2} alt="content"/>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Culturual Event</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
		  <button className="flex ml-auto text bgu1 py-2 px-6 focus:outline-none butcss mb-5">Explore more</button>

        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6  bgimgg">
          <img className="h-40  w-full object-cover object-center mb-6" src={image3} alt="content"/>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Gaming Event</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
		  <button className="flex ml-auto text bgu1 py-2 px-6 focus:outline-none butcss mb-5">Explore more</button>

        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6  bgimgg">
          <img className="h-40  w-full object-cover object-center mb-6" src={image4} alt="content"/>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Debate Event</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
		  <button className="flex ml-auto text bgu1 py-2 px-6 focus:outline-none butcss mb-5">Explore more</button>

        </div>
      </div>
    </div>
  </div>
</section>
		</div>
	);
};

export default EventCards;

