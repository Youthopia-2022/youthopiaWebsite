import "./EventsRoot.css";
const EventsRoot = (props) => {
  return (
    <div className="EventsRoot">
      <div className="main-container">
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
          <div className="knowmore">Know More</div>
        </div>
        <div className="right">
          {/* <div className="numbers">01 / 08</div> */}
        </div>
      </div>
    </div>
  );
};

export default EventsRoot;
