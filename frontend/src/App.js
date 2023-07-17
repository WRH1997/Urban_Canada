import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Booking from "./components/booking/booking";
import MyBookings from "./components/mybookings/mybookings";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Contact from "./components/contact/contact";
import LandingPage from "./components/landingpage/landing";
import FAQ from "./components/faq/faq";
import Profile from "./components/profile/Profile";
import {
  ServiceDashboardPage,
  ServiceDashboardPage2,
  ServiceDashErr1,
  ServiceDashErr2,
  ServiceDashErr3,
  ServiceDashErr4,
  ServiceDashErr5,
} from "./components/servicedashboard/servicedashboard.jsx";

// Admin pages
import { DashboardPage } from "./components/admin/pages/DashboardPage";
import VendorRequestPage from "./components/admin/pages/VendorRequestPage";
import VendorsPage from "./components/admin/pages/VendorsPage";
import CustomersPage from "./components/admin/pages/CustomersPage";

function App() {
  axios.interceptors.request.use((config) => {
    config.headers["Origin"] = "http://localhost:3001";
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  const navigate = useNavigate();

  function ProtectedRoute({ element, ...rest }) {
    const token = localStorage.getItem("token");
    const isAuthenticated = token != null;

    if (!isAuthenticated) {
      navigate("/login");
    }

    return isAuthenticated ? <Route {...rest} element={element} /> : null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <ProtectedRoute path="/MyBookings" element={<MyBookings />} />
        <Route path="/signup" element={<Signup />}></Route>
        <ProtectedRoute path="/profile" element={<Profile />} />
        <ProtectedRoute path="/booking" element={<Booking />}></ProtectedRoute>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <ProtectedRoute
          path="/ServiceDashboardPage"
          element={<ServiceDashboardPage />}
        />
        <ProtectedRoute
          path="/ServiceDashboardPage2"
          element={<ServiceDashboardPage2 />}
        />
        <ProtectedRoute path="/ServiceDashErr1" element={<ServiceDashErr1 />} />
        <ProtectedRoute path="/ServiceDashErr2" element={<ServiceDashErr2 />} />
        <ProtectedRoute path="/ServiceDashErr3" element={<ServiceDashErr3 />} />
        <ProtectedRoute path="/ServiceDashErr4" element={<ServiceDashErr4 />} />
        <ProtectedRoute path="/ServiceDashErr5" element={<ServiceDashErr5 />} />
        {/* Admin routes start */}
        <ProtectedRoute
          exact
          path="/admin/dashboard"
          element={<DashboardPage />}
        />
        <ProtectedRoute
          exact
          path="/admin/vendor-request"
          element={<VendorRequestPage />}
        />
        <ProtectedRoute exact path="/admin/vendors" element={<VendorsPage />} />
        <ProtectedRoute
          exact
          path="/admin/customers"
          element={<CustomersPage />}
        />
        {/* Admin routes end */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
