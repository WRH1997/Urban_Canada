import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Booking from "./components/booking/booking";
import MyBookings from "./components/mybookings/mybookings";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Contact from "./components/contact/contact";
import LandingPage from "./components/landingpage/landing";
import FAQ from "./components/faq/faq";

function App() {
  axios.interceptors.request.use((config) => {
    config.headers["Origin"] = "http://localhost:3001";
    return config;
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/MyBookings" element={<MyBookings />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
