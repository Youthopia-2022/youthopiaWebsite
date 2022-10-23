import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import Gallery from "./pages/Gallery";
import EventDetailsTechnical from "./pages/EventsDetails/EventDetailsTechnical";
import EventDetailsCultural from "./pages/EventsDetails/EventDetailsCultural";
import EventDetailsDebate from "./pages/EventsDetails/EventDetailsDebate";
import EventDetailsInformal from "./pages/EventsDetails/EventDetailsInformal";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />;
        <Route path="/events" element={<EventsPage />} />;
        <Route path="/events/evt" element={<EventDetailsTechnical />} />;
        <Route path="/events/evc" element={<EventDetailsCultural />} />;
        <Route path="/events/evd" element={<EventDetailsDebate />} />;
        <Route path="/events/evi" element={<EventDetailsInformal />} />;
         <Route path="/gallery" element={<Gallery />} />;
      </Routes>
      <Footer />
    </>
  );
};

export default App;
