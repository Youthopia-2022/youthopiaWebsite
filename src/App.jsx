import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import Gallery from "./pages/Gallery";
import EventDetailsTechnical from "./pages/EventsDetails/EventDetailsTechnical";
import EventDetailsCultural from "./pages/EventsDetails/EventDetailsCultural";
import EventDetailsDebate from "./pages/EventsDetails/EventDetailsDebate";
import EventDetailsInformal from "./pages/EventsDetails/EventDetailsInformal";
import Areyoufromdit from "./pages/Areyoufromdit/Areyoufromdit";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./pages/Aboutus/Aboutus";
import RegisterIndv from "./components/eventRegisteForm/RegisterIndv";
import RegisterIndvdit from "./components/eventRegisteForm/RegisterIndvdit";

const useScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    // scroll to the top of the browser window when changing route
    // the window object is a normal DOM object and is safe to use in React.
  }, [location]);
};

const App = () => {
  useScrollToTop();
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
        <Route
          path="events/evc/:name"
          element={<EventDetailsCultural />}
        ></Route>
        <Route
          path="events/evt/:name"
          element={<EventDetailsTechnical />}
        ></Route>
        <Route path="events/evd/:name" element={<EventDetailsDebate />}></Route>
        <Route
          path="events/evi/:name"
          element={<EventDetailsInformal />}
        ></Route>
        <Route path="/gallery" element={<Gallery />} />;
        <Route path="/forms/indv/dit" element={<RegisterIndvdit />} />;
        <Route path="/forms/indv/nondit" element={<RegisterIndv />} />;
        <Route path="/aboutus" element={<Aboutus />} />;
        <Route path="/fromdit" element={<Areyoufromdit />} />;
      </Routes>
      <Footer />
    </>
  );
};

export default App;
