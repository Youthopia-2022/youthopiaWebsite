import React from "react";

import sbucks from "../../images/sbucks.png";
import bking from "../../images/bking.png";
import dominose from "../../images/dominos.png";
import cocacola from "../../images/cocacola.png";
import mcd from "../../images/macd.png";

const Sponsers = () => {
	return (
		<div className="bg-[#3A3B5C]">
			<div className="py-4">
				<h3 className="self-center text-center font-normal text-3xl text-[#00DBFF]">
					Our Sponsers
				</h3>

				<div className="flex flex-col md:flex-row my-10 justify-center items-center">
					<img
						className="object-cover h-12 w-50 mx-10 my-5 md:my-0"
						src={sbucks}
						alt="sponsers"
					/>
					<img
						className="object-cover h-12 w-50 mx-10 my-5 md:my-0"
						src={dominose}
						alt="sponsers"
					/>
					<img
						className="object-cover h-12 w-50 mx-10 my-5 md:my-0"
						src={bking}
						alt="sponsers"
					/>
					<img
						className="object-cover h-12 w-50 mx-10 my-5 md:my-0"
						src={cocacola}
						alt="sponsers"
					/>
					<img
						className="object-cover h-12 w-50 mx-10 my-5 md:my-0"
						src={mcd}
						alt="sponsers"
					/>
				</div>
			</div>
		</div>
	);
};

export default Sponsers;
