import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetails from "./pages/EventsDetails";
import EventDetailsTechnical from "./pages/eventDetails/EventDetailsTechnical";
import EventDetailsCultural from "./pages/eventDetails/EventDetailsCultural";
import EventDetailsDebate from "./pages/eventDetails/EventDetailsDebate";
import EventDetailsInformal from "./pages/eventDetails/EventDetailsInformal";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/events" element={<EventsPage />} />;
      <Route path="/events/:id" element={<EventDetails />} />;
      <Route path="/events/evt" element={<EventDetailsTechnical />} />;
			<Route path="/events/evc" element={<EventDetailsCultural />} />;
			<Route path="/events/evd" element={<EventDetailsDebate />} />;
			<Route path="/events/evi" element={<EventDetailsInformal />} />;
    </Routes>
  );
};

export default App;
