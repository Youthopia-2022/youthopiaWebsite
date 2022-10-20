import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import "./App.css";
import EventsPage from "./pages/eventsPage/EventsPage";
import EventDetails from "./pages/eventDetails/EventDetails";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
		<Routes>
			<Route path="/" element={<HomePage />} />;
			<Route path="/events" element={<EventsPage />} />;
			<Route path="/events/:id" element={<EventDetails />} />;
		</Routes>
		<Footer/>
		</>
	);
}

export default App;
