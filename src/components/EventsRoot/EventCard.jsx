import "./EventCard.css";
import "@fontsource/ibm-plex-sans";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import { supabase } from "../../supabaseClient";
import { useEffect, useState } from "react";

const EventCard = (props) => {
	const [dimage, setdimage] = useState("");
	const {
		image,
		location,
		date,
		fees_dit,
		startTime,
		endTime,
		name,
		link,
		fees_outsiders,
	} = props;

	// fetching image data from supabase
	const getData = async () => {
		const { data } = supabase.storage
			.from("event-posters")
			.getPublicUrl(`${props.event_id}.webp`);
		setdimage(data.publicUrl);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="EventCardd">
			<div className="imagee">
				<img
					src={
						dimage
							? dimage
							: "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
					}
					alt=""
				/>
			</div>
			<div className="r1">
				<div className="namee capitalize">{name}</div>
				<div className="datee font-semibold">{date}</div>
			</div>
			<div className="r2">
				<div className="pricee">
					₹ {fees_dit === "0" ? fees_outsiders : fees_dit}
				</div>

				<div className="timee">
					{moment(startTime, "hh:mm a").format("hh:mm a")}
					{" - "}
					{moment(endTime, "hh:mm a").format("hh:mm a")}
				</div>
			</div>
			<div className="r3">
				<div className="locationn capitalize">{location}</div>
				<Link to={link}>
					<div className="buttonn rounded-xl">Register Now</div>
				</Link>
			</div>
		</div>
	);
};

export default EventCard;
