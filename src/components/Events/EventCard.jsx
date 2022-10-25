import "./EventCard.css";
import { Link } from "react-router-dom";
const EventCard = ({ data }) => {
	return (
		<div className="xl:w-1/4 md:w-1/2 p-4 eventCardAnim">
			<div className="bg-gray-100 bgimgg">
				<img
					className="h-40 w-full object-cover object-center mb-6"
					src={data.thumbnail}
					alt="content"
				/>
				<div className="px-6 pb-8">
					<h2 className="text-lg font-medium title-font mb-4 cl">
						{data.title}
					</h2>
					<p className="leading-relaxed text-base dsf">{data.desc}</p>
					<Link to={`/events`}>
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
