import { Link } from "react-router-dom";



export default function EventCard (props) {
	return (
		<div className="EventCard">
      <div className="image">
        <img src={props.img} alt="" />
      </div>
      <div className="r1">
        <div className="heading">{props.heading}</div>
        <div></div>
      </div>
      <div className="r2">
        <div className="description">{props.description}</div>
      </div>
      <div className="r3">
        <div>
        </div>
        <div>
        <button className="btn">Explore more</button>
        </div>
      </div>
    </div>
	);
};


