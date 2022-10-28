import "./EventCard.css";
import { Link } from "react-router-dom";
const EventCard = ({ data }) => {
  return (
    <div className="xl:w-1/4  md:w-1/2 p-4 abc">
      <div className="bg-gray-100 bgimgg">
        <img
          className="h-40 w-full object-cover object-center mb-5 -z-10"
          src={data.thumbnail}
          alt="content"
        />

        <h2 className="text-lg text-white font-medium title-font mb-4 px-3 -mt-4 w-max bg-[#FC0160]">
          {data.title}
        </h2>

        <div className="px-4 pb-8">
          <p className="leading-relaxed text-base dsf">{data.desc}</p>
          <Link to={data.link}>
            <button className="flex ml-auto text-[#FC0160] py-2 px-6 focus:outline-none bg-transparent mb-5">
              {"Explore more >"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
