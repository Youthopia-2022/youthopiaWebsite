import React, { useEffect } from "react";

import sbucks from "../../images/sbucks.png";
import bking from "../../images/bking.png";
import dominose from "../../images/dominos.png";
import cocacola from "../../images/cocacola.png";
import mcd from "../../images/macd.png";
import ScrollReveal from "scrollreveal";

const Sponsers = () => {
  const sr = ScrollReveal({
    distance: "60px",
    reset: false,
    duration: 1200,
    delay: 50,
    origin: "bottom",
  });
  useEffect(() => {
    sr.reveal(`.sponser1`, {});
    sr.reveal(`.sponser2`, { delay: 90 });
    sr.reveal(`.sponser3`, { delay: 130 });
    sr.reveal(`.sponser4`, { delay: 170 });
    sr.reveal(`.sponser5`, { delay: 210 }); // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-[#3A3B5C]">
      <div className="py-4 md:py-10">
        <h3 className="self-center text-center font-normal text-3xl text-[#00DBFF]">
          Our Sponsors
        </h3>

        <div className="flex flex-col md:flex-row my-10 justify-center items-center">
          <img
            className="object-cover h-12 w-50 mx-10 my-5 md:my-0 sponser1"
            src={sbucks}
            alt="sponsers"
          />
          <img
            className="object-cover h-12 w-50 mx-10 my-5 md:my-0 sponser2"
            src={dominose}
            alt="sponsers"
          />
          <img
            className="object-cover h-12 w-50 mx-10 my-5 md:my-0 sponser3"
            src={bking}
            alt="sponsers"
          />
          <img
            className="object-cover h-12 w-50 mx-10 my-5 md:my-0 sponser4"
            src={cocacola}
            alt="sponsers"
          />
          <img
            className="object-cover h-12 w-50 mx-10 my-5 md:my-0 sponser5"
            src={mcd}
            alt="sponsers"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
