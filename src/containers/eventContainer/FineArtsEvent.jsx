import { useEffect, useState } from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "./EventContainer.css";
import background from "../../images/informalEventBackground.webp";
import { supabase } from "../../supabaseClient";
import Loader from "../../components/Loader/Loader";

const FineArtsEvent = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  // fetching event data from supabase through event id
  const getData = async () => {
    try {
      setLoading(true);
      const { data, error, status } = await supabase
        .from("events")
        .select("*")
        .ilike("event_id", id);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setData(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect((name) => {
    const sr = ScrollReveal({
      distance: "60px",
      reset: false,
      duration: 1200,
      delay: 500,
      origin: "bottom",
    });
    sr.reveal(`.eventImage`, { origin: "left" });
    sr.reveal(`.eventTitle`, { origin: "right" });
    sr.reveal(`.eventInfo`, { origin: "bottom" });
    sr.reveal(`.eventDescription`, { origin: "bottom" });
    // sr.reveal(`.eventResgisterButton`, { origin: "bottom" });

    getData(); //eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {data.length > 0 &&
            data.map((items, id) => (
              <div
                className="EventContainer"
                style={{ backgroundImage: `url(${background})` }}
                key={id}
              >
                <div className="EventContainerChild">
                  <div className="eventImage">
                    <img
                      src={
                        items.event_image
                          ? items.event_image
                          : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
                      }
                      alt="event"
                    />
                  </div>
                  <div className="eventDetails">
                    <div className="eventDetailsTop">
                      <div className="eventTitle capitalize">
                        {items.event_name}
                      </div>
                      <div className="eventInfo">
                        <div>
                          <div></div>
                          <p className="capitalize">
                            {items.event_venue ? items.event_venue : "N/A"}
                          </p>
                        </div>
                        <div>
                          <div></div>
                          <p className="capitalize">{items.event_date}</p>
                        </div>
                        <div>
                          <div></div>
                          <p>
                            {moment(items.event_startTime, "hh:mm a").format(
                              "hh:mm a"
                            )}
                            {" - "}
                            {moment(items.event_endTime, "hh:mm a").format(
                              "hh:mm a"
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="eventDescription">
                      <p className="text-justify">{items.event_description}</p>
                      <div>
                        <div>
                          <p>Event Coordinator: </p>
                          <p className="capitalize">
                            {items.event_coordinator
                              ? items.event_coordinator
                              : "N/A"}
                          </p>
                        </div>
                        <div>
                          <p>Over All Heads: </p>
                          <p className="capitalize">
                            {items.event_overall_head
                              ? items.event_overall_head
                              : "N/A"}
                          </p>
                        </div>

                        <div>
                          <p>Event Type: </p>
                          <p>{items.event_isTeam ? "Team" : "Individual"}</p>
                        </div>

                        <div>
                          <p className="capitalize">Fees for DIT student: </p>
                          <p>
                            ₹
                            {items.event_fees_dit
                              ? items.event_fees_dit
                              : "N/A"}
                          </p>
                        </div>

                        <div>
                          <p className="capitalize">Fees for outsiders: </p>
                          <p>
                            ₹
                            {items.event_fees_outsiders
                              ? items.event_fees_outsiders
                              : "N/A"}
                          </p>
                        </div>

                        {items.event_isTeam && (
                          <div>
                            <p className="text-red-500 text-base">
                              *Minimum member {items.event_min_members} and
                              maximum members {items.event_max_members}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <Link
                      className="linkToRegister"
                      to={`/register/${items.event_id}`}
                    >
                      <button className="eventResgisterButton uppercase rounded-xl">
                        Register Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </>
  );
};
export default FineArtsEvent;
