import React, { useEffect, useState } from "react";
import "./Ticket.css";
import logoblack from "../../images/youthopia 2022 black.png";
import youthopialogo from "../../images/youthopia-logo-tkt.png";
import datetkt from "../../images/date-tkt-1.png";
import { supabase } from "../../supabaseClient";
import { useLocation } from "react-router-dom";

function Ticket() {
  const location = useLocation();
  const order_id = location.pathname.split("/")[2];
  console.log(order_id);

  const [eventDetails, setEventDetails] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getEventDetails = async (event_id) => {
    try {
      const { data, error, status } = await supabase
        .from("events")
        .select("*")
        .eq("event_id", event_id);
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setEventDetails(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const getData = async () => {
    try {
      const { data, error, status } = await supabase
        .from("registrations")
        .select("*");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        getEventDetails(data[0].event_id);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ticket">
      <div className="ticket-left">
        <img className="logo-blk" src={logoblack} alt="" />
        <img className="youthopia-logo" src={youthopialogo} alt="" />
        <img className="date-tkt" src={datetkt} alt="" />
        <div className="address flex ">
          <i className="location-icon fa-solid fa-location-dot"></i>
          <p>
            DIT University, Mussoorie Diversion Road,
            <br />
            Dehradun 248009
          </p>
        </div>
      </div>
      <div className="ticket-right">
        <h1 className="heading-tkt">Ticket Details</h1>
        <div className="subheading-tkt">
          <p>Event Name-{eventDetails[0].event_name}</p>
          <p>Event Venue-{eventDetails[0].event_venue}</p>
          <p>Event Date-{eventDetails[0].event_date}</p>
          <p>Event Time-{eventDetails[0].event_startTime}</p>
        </div>
        <div className="ticket-bottom flex">
          <p className="ticketNo mt-5">Ticket No:</p>
          <p className="orderNo">ORDER ID</p>
          <button className="admit-btn">ADMIT ONE</button>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
