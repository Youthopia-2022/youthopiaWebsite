import React from "react";

import sbucks from "../../Images/sbucks.png"
import bking from "../../Images/bking.png"
import dominose from "../../Images/dominos.png"
import cocacola from"../../Images/cocacola.png"
import mcd from "../../Images/macd.png"

const Sponsers = () => {
    return (
        
        <div class="bg-[#3A3B5C]">
<div className="sponsers "  >
 
   <center> <h3> Our Sponsers</h3 ></center><br/>
    <div class="flex -2.5">
    
        <img className="object-cover h-10 w-10 ml-72 mr-24 mb-8 vertical-align:middle" src={sbucks}   />
        <img className="object-cover h-10 w-50 ml-6 mr-24  align-middle" src={dominose} />
        <img className="object-cover h-10 w-50 ml-6 mr-24 item-center " src={bking} />
        <img className="object-cover h-5 w-50 ml-6 mr-24 mt-2 " src={cocacola} />
        <img className="object-cover h-10 w-50 ml-6 mr-24 align-cente" src={mcd} />
</div>
        </div>
        </div>
    )
}
    
        

export default Sponsers;
