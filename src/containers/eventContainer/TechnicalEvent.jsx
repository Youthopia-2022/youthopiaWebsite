import "./EventContainer.css";
import background from "../../images/technicalEventBackground.png";
import "./EventContainer.css";
import { useParams } from "react-router-dom";
import dummyData from "../../pages/EventsPage/dummyData.json";

const TechnicalEvent = (props) => {
  const { name } = useParams();

  return (
    <>
      {dummyData
        .filter((items) => items.name === name)
        .map((items, index) => (
          <div
            className="bg-center bg-no-repeat bg-cover py-[2rem] flex justify-center items-center min-h-[80vh]"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            <div className="EventContainerChild w-[100vw] flex flex-row justify-start p-[1rem]">
              <div className="eventImage w-[40%] flex justify-center items-center">
                <img
                  src={items.imag}
                  alt=""
                  className="w-[300px] min-w-[300px] rounded"
                />
              </div>
              <div className="eventDetails w-[60%] max-w-[800px] text-white flex flex-col mt-[0.15rem] pr-[1rem]">
                <div className="w-[max-content]">
                  <div className="eventTitle font-bold text-[3.5rem]">
                    {items.name}
                  </div>
                  <div className="flex justify-between items-center w-[100%] mt-[1rem] text-[1.2rem] font-[500]">
                    <p>{items.location} </p>{" "}
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-white"></div>
                    <p className="text-[#fc0160]">{items.date}</p>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-white"></div>
                    <p>{items.time}</p>
                  </div>
                </div>
                <div className="eventDescription mt-[2rem] flex items-start flex-col gap-[1rem]">
                  <p>{items.aboutt}</p>
                  <div>
                    <div className="flex text-[#1bbee9] gap-[0.5rem] leading-[1.2rem]">
                      <p className="font-medium">Event Coordinator: </p>
                      <p>{items.Coordinator}</p>
                    </div>
                    <div className="flex text-[#1bbee9] gap-[0.5rem] leading-[1.2rem]">
                      <p className="font-medium">Over All Headr: </p>
                      <p>Some person</p>
                    </div>
                    <div className="flex text-[#1bbee9] gap-[0.5rem] leading-[1.2rem]">
                      <p className="font-medium">Fees </p>
                      <p>{items.eventFeeNonDIT}</p>
                    </div>
                  </div>
                </div>
                <button className="eventResgisterButton border-[1px] border-solid border-[#fc0160] w-[9rem] h-[3rem] mt-[2rem]">
                  Resgister Now
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default TechnicalEvent;
