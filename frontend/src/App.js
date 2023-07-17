import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Booking from "./components/booking/booking";
import MyBookings from "./components/mybookings/mybookings";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Contact from "./components/contact/contact";
import LandingPage from "./components/landingpage/landing";
import FAQ from "./components/faq/faq";
import Profile from "./components/profile/Profile";
import LoginRedirect from "./components/LoginRedirects/LoginRedirect";
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
    config.headers["Origin"] = "http://localhost:3000";
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        {/* <ProtectedRoute path="/MyBookings" element={<MyBookings />} /> */}
        <Route path="/MyBookings" element={<LoginRedirect />}>
          <Route index element={<MyBookings />} />
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* <ProtectedRoute path="/profile" element={<Profile />} /> */}
        <Route path="/profile" element={<LoginRedirect />}>
          <Route index element={<Profile />} />
        </Route>
        {/* <ProtectedRoute path="/booking" element={<Booking />}></ProtectedRoute> */}
        <Route path="/booking" element={<LoginRedirect />}>
          <Route index element={<Booking />} />
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        {/* <ProtectedRoute
          path="/ServiceDashboardPage"
          element={<ServiceDashboardPage />}
        /> */}
        <Route path="/ServiceDashboardPage" element={<LoginRedirect />}>
          <Route index element={<ServiceDashboardPage />} />
        </Route>
        {/* <ProtectedRoute
          path="/ServiceDashboardPage2"
          element={<ServiceDashboardPage2 />}
        /> */}
        <Route path="/ServiceDashboardPage2" element={<LoginRedirect />}>
          <Route index element={<ServiceDashboardPage2 />} />
        </Route>
        {/* <ProtectedRoute path="/ServiceDashErr1" element={<ServiceDashErr1 />} /> */}
        <Route path="/ServiceDashErr1" element={<LoginRedirect />}>
          <Route index element={<ServiceDashErr1 />} />
        </Route>
        {/* <ProtectedRoute path="/ServiceDashErr2" element={<ServiceDashErr2 />} /> */}
        <Route path="/ServiceDashErr2" element={<LoginRedirect />}>
          <Route index element={<ServiceDashErr2 />} />
        </Route>
        {/* <ProtectedRoute path="/ServiceDashErr3" element={<ServiceDashErr3 />} /> */}
        <Route path="/ServiceDashErr3" element={<LoginRedirect />}>
          <Route index element={<ServiceDashErr3 />} />
        </Route>
        {/* <ProtectedRoute path="/ServiceDashErr4" element={<ServiceDashErr4 />} /> */}
        <Route path="/ServiceDashErr4" element={<LoginRedirect />}>
          <Route index element={<ServiceDashErr4 />} />
        </Route>
        {/* <ProtectedRoute path="/ServiceDashErr5" element={<ServiceDashErr5 />} /> */}
        <Route path="/ServiceDashErr5" element={<LoginRedirect />}>
          <Route index element={<ServiceDashErr5 />} />
        </Route>
        {/* Admin routes start */}
        {/* <ProtectedRoute
          exact
          path="/admin/dashboard"
          element={<DashboardPage />}
        /> */}
        <Route path="/admin/dashboard" element={<LoginRedirect />}>
          <Route index element={<DashboardPage />} />
        </Route>
        {/* <ProtectedRoute
          exact
          path="/admin/vendor-request"
          element={<VendorRequestPage />}
        /> */}
        <Route path="/admin/vendor-request" element={<LoginRedirect />}>
          <Route index element={<VendorRequestPage />} />
        </Route>
        {/* <ProtectedRoute exact path="/admin/vendors" element={<VendorsPage />} /> */}
        <Route path="/admin/vendors" element={<LoginRedirect />}>
          <Route index element={<VendorsPage />} />
        </Route>
        {/* <ProtectedRoute
          exact
          path="/admin/customers"
          element={<CustomersPage />}
        /> */}
        <Route path="/admin/customers" element={<LoginRedirect />}>
          <Route index element={<CustomersPage />} />
        </Route>
        {/* Admin routes end */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
