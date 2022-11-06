import "./Abus.css";

const Abus = (props) => {
	console.log(props);
	return (
		<div>
			<p className="heading mb-4 capitalize">{props.title}</p>
			{props.heads.length > 0 && (
				<>
					{props.heads.map((item, id) => (
						<div key={id} className="my-1">
							<a
								href={item.url}
								target="_blank"
								rel="noreferrer"
								className="base"
							>
								{item.name}
							</a>
							<p className="base2">{item.branch}</p>
						</div>
					))}
				</>
			)}
			{props.members.map((member, id) => (
				<div key={id}>
					<a
						href={member.url}
						target="_blank"
						rel="noreferrer"
						className="base"
					>
						{member.name}
					</a>
					<p className="base2">{member.branch}</p>
				</div>
			))}
		</div>
	);
};

export default Abus;
