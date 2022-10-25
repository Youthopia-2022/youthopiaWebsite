import React from "react";
import absimage from "../../images/absimage.png";
import logo from "../../images/logo.png";
import "./Aboutus.css";
import Abus from "../../components/Abus/Abus";
const Aboutus = () => {
	const myStyle7 = {
		color: "white",
		fontFamily: "'IBM Plex Sans'",
		fontSize: 28,
		fontWeight: 700,
	};
	const Conveners = [
		{ membername: "abc", branchyear: "branch" },
		{ membername: "abc", branchyear: "branch" },
	];

	return (
		<div className=" maincontainerAboutUs bg-[#3A3B5C]">
			<div className="aboutUsContent">
				<h1 style={myStyle7}>Meet Our Team</h1>
				<br></br>
				<div className="teamsHolder flex flex-row justify-start p-[2rem] gap-y-[2rem] gap-x-[4rem] flex-wrap">
					<Abus title="Conveners" members={Conveners} />
					<Abus title="Designer team" members={Conveners} />
					<Abus title="Designer team" members={Conveners} />
					<Abus title="Designer team" members={Conveners} />
					<Abus title="Development Team members" members={Conveners} />
				</div>
			</div>
			<img className="logo" src={logo} alt="img not availabe"></img>
			<img className="absimage" src={absimage} alt="img not avilable"></img>
		</div>
	);
};
export default Aboutus;
