import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetails from "./pages/EventsDetails";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/events" element={<EventsPage />} />;
      <Route path="/events/:id" element={<EventDetails />} />;
      <Route path="/gallery" element={<Gallery />} />;
    </Routes>
  );
};

export default App;
