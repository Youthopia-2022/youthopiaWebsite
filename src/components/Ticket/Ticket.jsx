import React from 'react'
import "./Ticket.css"
import logoblack from "../../images/youthopia 2022 black.png"
import youthopialogo from "../../images/youthopia-logo-tkt.png"
import datetkt from "../../images/date-tkt-1.png"

function Ticket() {
    return (
        <div className="ticket">
            <div className='ticket-left'>
                <img className="logo-blk" src={logoblack} alt="" />
                <img className="youthopia-logo" src={youthopialogo} alt="" />
                <img className="date-tkt" src={datetkt} alt="" />
                <div className="address flex ">
                    <i className="location-icon fa-solid fa-location-dot"></i>
                    <p>DIT University, Mussoorie Diversion Road,<br />Dehradun 248009</p>
                </div>
            </div>
            <div className="ticket-right">
                <h1 className='heading-tkt'>Ticket Details</h1>
                <div className="subheading-tkt">
                    {/* <p>Order Id-</p> */}
                    <p>Event Name-</p>
                    <p>Event Venue-</p>
                    <p>Event Date-</p>
                    <p>Event Time-</p>
                </div>
                <div className="ticket-bottom flex">
                <p className='ticketNo mt-5'>Ticket No:</p>
                <p className='orderNo'>ORDER ID</p>
                <button className='admit-btn'>ADMIT ONE</button>
                </div>
            </div>
        </div>
    )
}

export default Ticket;
