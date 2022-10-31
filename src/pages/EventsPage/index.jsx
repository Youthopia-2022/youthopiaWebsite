import { useEffect, useState } from "react";
import EventCard from "../../components/EventsRoot/EventCard";
import "@fontsource/ibm-plex-sans";
import "./EventsPage.css";
import { useLocation } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const EventsPage = () => {
	const [data, setData] = useState("");
	const [filteredData, setFilteredData] = useState("");
	const [isActivet, setIsActivet] = useState(false);
	const [isActivec, setIsActivec] = useState(false);
	const [isActivei, setIsActivei] = useState(false);
	const [isActived, setIsActived] = useState(false);
	const [isActiveal, setIsActiveal] = useState(true);
	const [isActivefa, setIsActivefa] = useState(false);

	const { search } = useLocation(); // using location object to get the query params

	//superbase Integration
	const supabaseUrl = "https://bwqibqbxbirzbyjqovco.supabase.co";
	const supabaseKey =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3cWlicWJ4YmlyemJ5anFvdmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2NDMxNTcsImV4cCI6MTk4MTIxOTE1N30.7TLUvzsw1-YI-G02oDJbsHHH7U5d1RS25-b-mLiXL6M";
	const supabase = createClient(supabaseUrl, supabaseKey);
	const getData = async () => {
		let { data: events_new, error } = await supabase
			.from("events_new")
			.select("*");
		setData(events_new);
		setFilteredData(events_new);
		if (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (search !== "") {
			let tabName = search.split("?")[1];

			if (tabName === "evt") {
				handleClickTe("evt");
			} else if (tabName === "evc") {
				handleClickCu("evc");
			} else if (tabName === "evd") {
				handleClickDe("evd");
			} else if (tabName === "evi") {
				handleClickIn("evi");
			} else if (tabName === "evfa") {
				handleClickFa("evfa");
			}
		}
		getData();
		// eslint-disable-next-line
	}, []);

	const handleClickAl = () => {
		setIsActiveal((current) => true);
		setIsActivet((current) => false);
		setIsActivec((current) => false);
		setIsActivei((current) => false);
		setIsActived((current) => false);
		setIsActivefa((current) => false);

		setFilteredData(data);
		if (search !== "") {
			window.history.pushState({}, "", "/events"); // resetting the state of url to default
		}
	};
	const handleClickTe = (catItem) => {
		setIsActivet((current) => true);
		setIsActivec((current) => false);
		setIsActivei((current) => false);
		setIsActived((current) => false);
		setIsActiveal((current) => false);
		setIsActivefa((current) => false);

		const result = data.filter((curData) => {
			return curData.event_category === catItem;
		});
		setFilteredData(result);
		if (search !== "") {
			window.history.pushState({}, "", "/events"); // resetting the state of url to default
		}
	};
	const handleClickCu = (catItem) => {
		setIsActivec((current) => true);
		setIsActivet((current) => false);
		setIsActivei((current) => false);
		setIsActived((current) => false);
		setIsActiveal((current) => false);
		setIsActivefa((current) => false);

		const result = data.filter((curData) => {
			return curData.event_category === catItem;
		});
		setFilteredData(result);
		if (search !== "") {
			window.history.pushState({}, "", "/events"); // resetting the state of url to default
		}
	};
	const handleClickIn = (catItem) => {
		setIsActivei((current) => true);
		setIsActivec((current) => false);
		setIsActivet((current) => false);
		setIsActived((current) => false);
		setIsActiveal((current) => false);
		setIsActivefa((current) => false);

		const result = data.filter((curData) => {
			return curData.event_category === catItem;
		});
		setFilteredData(result);
		if (search !== "") {
			window.history.pushState({}, "", "/events"); // resetting the state of url to default
		}
	};
	const handleClickDe = (catItem) => {
		setIsActived((current) => true);
		setIsActivei((current) => false);
		setIsActivet((current) => false);
		setIsActivec((current) => false);
		setIsActiveal((current) => false);
		setIsActivefa((current) => false);

		const result = data.filter((curData) => {
			return curData.event_category === catItem;
		});
		setFilteredData(result);
		if (search !== "") {
			window.history.pushState({}, "", "/events"); // resetting the state of url to default
		}
	};

	const handleClickFa = (catItem) => {
		setIsActiveal((current) => false);
		setIsActivet((current) => false);
		setIsActivec((current) => false);
		setIsActivei((current) => false);
		setIsActived((current) => false);
		setIsActivefa((current) => true);

		const result = data.filter((curData) => {
			return curData.event_category === catItem;
		});
		setFilteredData(result);
		if (search !== "") {
			window.history.pushState({}, "", "/events"); // resetting the state of url to default
		}
	};

	return (
		<div>
			<div>
				<div className="eventheader">
					<button
						className={isActiveal ? "active" : ""}
						onClick={() => handleClickAl("All")}
					>
						All
					</button>
					<button
						className={isActivet ? "active" : ""}
						onClick={() => handleClickTe("Technical")}
					>
						Technical
					</button>
					<button
						className={isActivec ? "active" : ""}
						onClick={() => handleClickCu("Cultural")}
					>
						Cultural
					</button>
					<button
						className={isActivei ? "active" : ""}
						onClick={() => handleClickIn("Informal")}
					>
						Informal
					</button>
					<button
						className={isActived ? "active" : ""}
						onClick={() => handleClickDe("Literary")}
					>
						Literary
					</button>
					<button
						className={isActivefa ? "active" : ""}
						onClick={() => handleClickFa("Fine Arts")}
					>
						Fine Arts
					</button>
				</div>
			</div>
			<div>
				<div className="allEvents">
					{filteredData &&
						filteredData.map((event, id) => {
							return (
								<EventCard
									key={id}
									name={event.event_name}
									image={
										event.event_image
											? event.event_image
											: "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
									}
									location={event.event_venue}
									time={event.event_time}
									price={event.event_fees}
									date={event.event_date}
									Link={`${
										event.event_category === "Technical"
											? "evt"
											: event.event_category === "Literary"
											? "evd"
											: event.event_category === "Informal"
											? "evi"
											: "evc"
									}/${event.event_id}`}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default EventsPage;
