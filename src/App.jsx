import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Pages/Hero";
import About from "./Pages/AboutUs";
import Services from "./Pages/Services";
import BookingPage from "./Pages/Bookingpage";
import Contact from "./Pages/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service-booking" element={<BookingPage />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
