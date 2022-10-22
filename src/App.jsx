import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailsTechnical from "./pages/EventsDetails/EventDetailsTechnical";
import EventDetailsCultural from "./pages/EventsDetails/EventDetailsCultural";
import EventDetailsDebate from "./pages/EventsDetails/EventDetailsDebate";
import EventDetailsInformal from "./pages/EventsDetails/EventDetailsInformal";

const App = () => {
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
};

export default App;