import "./EventCard.css";

const EventCard = ({ data }) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 bgimgg">
        <img
          className="h-40 w-full object-cover object-center mb-6"
          src={data.thumbnail}
          alt="content"
        />
        <div className="px-6 pb-8">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            {data.title}
          </h2>
          <p className="leading-relaxed text-base">{data.desc}</p>
          <button className="flex ml-auto text-[#FC0160] py-2 px-6 focus:outline-none bg-transparent mb-5">
            {"Explore more >"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
