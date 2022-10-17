import { Link } from "react-router-dom";
const homePage = () => {
	return (
		<div>
			<h1>This is home page</h1>
			<ul>
				<li>about youthopia</li>
				<li>some important details</li>
			</ul>

			{/* link to events page */}
			<Link to="/events">
				<button> Explore events button</button>
			</Link>
		</div>
	);
};

export default homePage;
