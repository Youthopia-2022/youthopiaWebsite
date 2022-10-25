import "./EventContainer.css";
import background from "../../images/informalEventBackground.png";
// import image from "../../images/image01.png";
import "./EventContainer.css";
import { useParams } from "react-router-dom";
import dummyData from "../../pages/EventsPage/dummyData.json";

const InformalEvent = (props) => {
  const { name } = useParams();

  return (
    <>
      {dummyData
        .filter((items) => items.name === name)
        .map((items, index) => (
          <div
            className="EventContainer"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            <div className="EventContainerChild">
              <div className="eventImage">
                <img src={items.imag} alt="" />
              </div>
              <div className="eventDetails">
                <div className="eventDetailsTop">
                  <div className="eventTitle">{items.name}</div>
                  <div className="eventInfo">
                    <p>Vedanta Hall </p> <div></div> <p>{items.date}</p>{" "}
                    <div></div> <p>{items.time}</p>
                  </div>
                </div>
                <div className="eventDescription">
                  <p>{items.aboutt}</p>
                  <div>
                    <div>
                      <p>Event Coordinator: </p>
                      <p>{items.Coordinator}</p>
                    </div>
                    <div>
                      <p>Over All Headr: </p>
                      <p>Some person</p>
                    </div>
                    <div>
                      <p>Fees: </p>
                      <p>{items.price}</p>
                    </div>
                  </div>
                </div>
                <button className="eventResgisterButton">Resgister Now</button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default InformalEvent;
