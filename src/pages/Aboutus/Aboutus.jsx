import React, { useEffect, useState } from "react";
import absimage from "../../images/absimage.png";
import logo from "../../images/logo.png";
import "./Aboutus.css";
import Abus from "../../components/Abus/Abus";
import { supabase } from "../../supabaseClient";

const Aboutus = () => {
	const [data, setData] = useState("");
	const getData = async () => {
		try {
			const { data, error, status } = await supabase
				.from("aboutus")
				.select("*");

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				setData(data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const myStyle7 = {
		color: "white",
		fontFamily: "'IBM Plex Sans'",
		fontSize: 28,
		fontWeight: 700,
	};

	return (
		<div className="maincontainerAboutUs bg-[#3A3B5C]">
			<div className="aboutUsContent">
				<h1 style={myStyle7}>Meet Our Team</h1>
				<br></br>
				<div className="teamsHolder px-5 md:px-0 pb-10 md:justify-center">
					{data &&
						data.length > 0 &&
						data.map((team, id) => (
							<Abus
								key={id}
								title={team.team_name}
								heads={team.team_head}
								members={team.team_members}
							/>
						))}
				</div>
			</div>
			<img className="logo" src={logo} alt="img not availabe"></img>
			<img className="absimage" src={absimage} alt="img not avilable"></img>
		</div>
	);
};
export default Aboutus;
