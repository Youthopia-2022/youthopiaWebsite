import "./EventContainer.css";
import background from "../../images/debateEventBackground.png";
import "./EventContainer.css";
import dummyData from "../../pages/EventsPage/dummyData.json";
import { useParams } from "react-router-dom";

const DebateEvent = (props) => {
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
                    <p>{items.location} </p> <div></div> <p>{items.date}</p>
                    {items.aboutt}
                    <div></div> <p>{items.time}</p>
                  </div>
                </div>
                <div className="eventDescription">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione dolor, placeat quidem deleniti quos repellat impedit
                    voluptatem debitis deserunt sequi est, dolorum consequuntur.
                    Tempora laudantium repellat architecto doloremque ratione
                    eligendi similique eum, nemo sit. Quisquam officiis
                    blanditiis consequuntur nemo quae?
                  </p>
                  <div>
                    <div>
                      <p>Event Coordinator: </p>
                      <p>Some person</p>
                    </div>
                    <div>
                      <p>Over All Headr: </p>
                      <p>Some person</p>
                    </div>
                    <div>
                      <p>Fees: </p>
                      <p></p>
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

export default DebateEvent;
