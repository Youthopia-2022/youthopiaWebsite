import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import Gallery from "./pages/Gallery";
import Register from "./pages/Register";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./pages/Aboutus/Aboutus";
import RegisterDit from "./pages/Register/RegisterDit";
import RegisterOutside from "./pages/Register/RegisterOutside";
import CulturalEvent from "./containers/eventContainer/CulturalEvent";
import TechnicalEvent from "./containers/eventContainer/TechnicalEvent";
import LiteraryEvent from "./containers/eventContainer/LiteraryEvent";
import InformalEvent from "./containers/eventContainer/InformalEvent";
import FineArtsEvent from "./containers/eventContainer/FineArtsEvent";
import Signup from "./components/Signup/Signup";
import EmialVerify from "./components/Emailverify/EmialVerify";
import Ticket from "./components/Ticket/Ticket";
import Error from "./components/Error/Error";

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
        <Route path="/events/evc/:id" element={<CulturalEvent />} />
        <Route path="/events/evt/:id" element={<TechnicalEvent />} />
        <Route path="/events/evd/:id" element={<LiteraryEvent />} />
        <Route path="/events/evi/:id" element={<InformalEvent />} />
        <Route path="/events/evfa/:id" element={<FineArtsEvent />} />
        <Route path="/gallery" element={<Gallery />} />;
        <Route path="/signup" element={<Signup />} />;
        <Route path="/emailverify/:id" element={<EmialVerify />} />;
        <Route path="/ticket/:id" element={<Ticket />} />;
        <Route path="/aboutus" element={<Aboutus />} />;
        <Route path="/notfound" element={<Error/>} />;
        <Route path="/register/:id" element={<Register />} />;
        <Route path="/registerdit/:id" element={<RegisterDit />} />;
        <Route path="/registeroutside/:id" element={<RegisterOutside />} />;
      </Routes>
      <Footer />
    </>
  );
};

export default App;
