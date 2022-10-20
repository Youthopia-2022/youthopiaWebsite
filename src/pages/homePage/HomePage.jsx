import { Link } from "react-router-dom";
// import "./HomePage.css";
import image from "../../Images/image-3.png";
const homePage = () => {
  return (
    <div className="EventsRoot">
      <div className="left">
        <div className="title">DJ NIGHT BY RITIVIZ</div>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="date">20/11/2022</div>
        <div className="details">
          <div className="location">Chanakya Lawn</div>
          <div className="time">6:20 PM</div>
        </div>
        <div className="knowmore">Know More</div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default homePage;
