import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import "./App.css";
import EventsPage from "./pages/eventsPage/EventsPage";
import EventDetailsTechnical from "./pages/eventDetails/EventDetailsTechnical";
import EventDetailsCultural from "./pages/eventDetails/EventDetailsCultural";
import EventDetailsDebate from "./pages/eventDetails/EventDetailsDebate";
import EventDetailsInformal from "./pages/eventDetails/EventDetailsInformal";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />;
			<Route path="/events" element={<EventsPage />} />;
			<Route path="/events/evt" element={<EventDetailsTechnical />} />;
			<Route path="/events/evc" element={<EventDetailsCultural />} />;
			<Route path="/events/evd" element={<EventDetailsDebate />} />;
			<Route path="/events/evi" element={<EventDetailsInformal />} />;
		</Routes>
	);
}

export default App;
