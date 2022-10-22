import { Link } from "react-router-dom";



export default function EventCard (props) {
	return (
		<div className="EventCard">
			<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">


      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6  bgimgg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src= {props.img} alt="content"/>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{props.heading}</h2>
          <p className="l e">{props.description}</p>
		  <button className="flex ml-auto text bgu1 py-2 px-6 focus:outline-none butcss mb-6">Explore more</button>

        </div>
      </div>
    
  </div>
</section>
		</div>
	);
};


