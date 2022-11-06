import React, { useEffect, useState } from "react";
import EventsRoot from "./EventsRoot";
import "./EventsRoot.css";
import { supabase } from "../../supabaseClient";

function DjNight() {
	const [data, setData] = useState("");
	const [current, setCurrent] = useState(1);
	const getData = async () => {
		try {
			const { data } = await supabase.from("daily-main-events").select("*");

			if (data) {
				setData(data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const increase = () => {
		if (current < data.length) {
			setCurrent((x) => x + 1);
		} else {
			setCurrent(1);
		}
	};
	const decrease = () => {
		if (current > 1) {
			setCurrent((x) => x - 1);
		} else {
			setCurrent(data.length);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	useEffect(() => {
		setTimeout(() => increase(), 3000);
	}, [current, data]);

	return (
		<div className="main-container">
			{data && data.length > 0 && (
				<EventsRoot
					title={
						data[current - 1].event_name
							? data[current - 1].event_name
							: "event name"
					}
					date={
						data[current - 1].event_date
							? data[current - 1].event_date
							: "event date"
					}
					location={
						data[current - 1].event_location
							? data[current - 1].event_location
							: "event location"
					}
					time={
						data[current - 1].event_time
							? data[current - 1].event_time
							: "event time"
					}
					image={
						data[current - 1].event_poster_url
							? data[current - 1].event_poster_url
							: "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
					}
				></EventsRoot>
			)}
			{data && data.length > 0 && (
				<div className="right">
					<div className="rightTop">
						<p>
							{current < 10 && "0"}
							{current}
						</p>
						<p>/</p>
						<p>
							{data.length < 10 && "0"}
							{data.length}
						</p>
					</div>
					<div className="rightBottom">
						<div onClick={() => decrease()}>
							<div> &lt;</div>
						</div>
						<div onClick={() => increase()}>
							<div>&gt;</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default DjNight;
