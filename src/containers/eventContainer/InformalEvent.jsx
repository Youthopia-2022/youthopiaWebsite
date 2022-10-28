import "./EventContainer.css";
import background from "../../images/informalEventBackground.png";
import "./EventContainer.css";
import { Link, useParams } from "react-router-dom";
import dummyData from "../../pages/EventsPage/dummyData.json";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const TechnicalEvent = (props) => {
  const { name } = useParams();
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      reset: false,
      duration: 1200,
      delay: 500,
      origin: "bottom",
    });
    sr.reveal(`.eventImage`, { origin: "left" });
    sr.reveal(`.eventTitle`, { origin: "right" });
    sr.reveal(`.afterEventTitle`, { origin: "bottom" });
    sr.reveal(`.eventDescription`, { origin: "bottom" });
    sr.reveal(`.eventResgisterButton`, { origin: "bottom" });
  }, []);

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
            <div className="EventContainerChild w-full flex flex-row justify-start p-[1rem]">
              <div className="eventImage w-[40%] flex justify-center items-center">
                <img
                  src={items.imag}
                  alt=""
                  className="w-[300px] min-w-[300px] rounded"
                />
              </div>
              <div className="eventDetails max-w-[100%] text-white flex flex-col mt-[0.15rem] pr-[1rem]">
                <div className="w-[max-content] w-[100%]">
                  <div className="eventTitle font-bold text-[3rem] justify-center text-center">
                    {items.name}
                  </div>
                  <div className="afterEventTitle flex flex-wrap justify-between items-center w-[100%] mt-[1rem] text-[1.2rem] font-[500]">
                    <p className="">{items.location} </p>{" "}
                    {/* <div className="w-[10px] h-[10px] rounded-[50%] bg-white"></div> */}
                    <p className="text-[#fc0160] m-3">{items.date}</p>
                    {/* <div className="w-[10px] h-[10px] rounded-[50%] bg-white"></div> */}
                    <p className="m-3">{items.time}</p>
                  </div>
                </div>
                <div className="eventDescription mt-[2rem] flex items-start w-[100%] flex-col gap-[1rem justify-center]">
                  <p>{items.aboutt}</p>
                  <div className="cen justify-center text-center">
                    <div className="flex text-[#1bbee9] gap-[0.5rem] justify-center text-center">
                      <p className="font-medium">Event Coordinator: </p>
                      <p>{items.Coordinator}</p>
                    </div>
                    <div className="flex text-[#1bbee9] gap-[0.5rem] leading-[1.2rem] justify-center">
                      <p className="font-medium">Over All Head: </p>
                      <p>Some person</p>
                    </div>
                    <div className="flex text-[#1bbee9] gap-[0.5rem] leading-[1.2rem] justify-center">
                      <p className="font-medium text-center">Fees </p>
                      <p>{items.eventFeeNonDIT}</p>
                    </div>
                  </div>
                </div>
                <div className="anything text-center" >

                  <button className="eventResgisterButton border-[1px] border-solid border-[#fc0160] w-[9rem] text-center h-[3rem] mt-[2rem] ">
				  <Link to={`/register/${name}`} className="text-center">
                    Resgister Now
                </Link>
                  </button>
				</div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default TechnicalEvent;
