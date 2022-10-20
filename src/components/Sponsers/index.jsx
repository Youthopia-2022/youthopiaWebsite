import React from "react";

import sbucks from "../../images/sbucks.png";
import bking from "../../images/bking.png";
import dominose from "../../images/dominos.png";
import cocacola from "../../images/cocacola.png";
import mcd from "../../images/macd.png";

const Sponsers = () => {
  return (
    <div class="bg-[#3A3B5C]">
      <div className="sponsers ">
        <center>
          <h3> Our Sponsers</h3>
        </center>
        <br />
        <div class="flex -2.5">
          <img
            className="object-cover h-10 w-10 ml-72 mr-24 mb-8 vertical-align:middle"
            src={sbucks}
            alt="sponsers"
          />
          <img
            className="object-cover h-10 w-50 ml-6 mr-24  align-middle"
            src={dominose}
            alt="sponsers"
          />
          <img
            className="object-cover h-10 w-50 ml-6 mr-24 item-center "
            src={bking}
            alt="sponsers"
          />
          <img
            className="object-cover h-5 w-50 ml-6 mr-24 mt-2 "
            src={cocacola}
            alt="sponsers"
          />
          <img
            className="object-cover h-10 w-50 ml-6 mr-24 align-cente"
            src={mcd}
            alt="sponsers"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
