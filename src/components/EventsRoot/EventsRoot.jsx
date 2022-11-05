const EventsRoot = (props) => {
	return (
		<div className="left">
			<div className="title">{props.title}</div>
			<div className="image">
				<img src={props.image} alt="" />
			</div>
			<div className="date">{props.date}</div>
			<div className="details">
				<div className="location">{props.location}</div>
				<div className="time">{props.time}</div>
			</div>
		</div>
	);
};

export default EventsRoot;
