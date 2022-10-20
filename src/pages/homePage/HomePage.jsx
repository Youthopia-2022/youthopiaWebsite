import { Link } from "react-router-dom";
import Sponsers from "../../components/Sponsers";

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
			<Sponsers />

		</div>
	);
};

export default homePage;
