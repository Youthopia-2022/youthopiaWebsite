import React from "react";
import "./Abus.css";
function Abus(props) {
	return (
		<div>
			<p className="heading">{props.title}</p>
			{props.members.map((member, id) => (
				<div key={id}>
					<p className="base">{member.membername}</p>
					<p className="base2">{member.branchyear}</p>
				</div>
			))}
		</div>
	);
}

export default Abus;
