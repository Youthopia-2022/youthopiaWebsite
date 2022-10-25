import React from "react";
import "./Abus.css"
function Abus(props){
    return(
        <div>
            <p className="heading">{props.title}</p>
            <p className="base">{props.membername}</p>
            <p className="base2">{props.branchyear}</p>
            

        </div>
    )
}


export default Abus;