import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Booking from "./components/booking/booking";
import MyBookings from "./components/mybookings/mybookings";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Contact from "./components/contact/contact";
import LandingPage from "./components/landingpage/landing";
import FAQ from "./components/faq/faq";

// Admin pages
import { DashboardPage } from "./components/admin/pages/DashboardPage"
import VendorRequestPage from "./components/admin/pages/VendorRequestPage"
import VendorsPage from "./components/admin/pages/VendorsPage"
import CustomersPage from "./components/admin/pages/CustomersPage"

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
        {/* Admin routes start */}
        <Route exact path="/admin/dashboard" Component={DashboardPage} />
        <Route exact path="/admin/vendor-request" Component={VendorRequestPage} />
        <Route exact path="/admin/vendors" Component={VendorsPage} />
        <Route exact path="/admin/customers" Component={CustomersPage} />
        {/* Admin routes end */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
