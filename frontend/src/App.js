import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage/landing";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import LoginRedirect from "./components/LoginRedirects/LoginRedirect";
import ConsumerLogin from "./components/LoginRedirects/LoginRedirect_Consumer";
import ProviderLogin from "./components/LoginRedirects/LoginRedirect_Provider";
import AdminLogin from "./components/LoginRedirects/LoginRedirect_Admin";
import { EmailContext } from "./contexts/EmailContext";
import ResetPasswordRequest from "./components/resetPassword/ResetPasswordRequest";
import ResetPasswordConfirm from "./components/resetPassword/ResetPasswordConfirm";
import UpdatePassword from "./components/resetPassword/UpdatePassword";
import Profile from "./components/profile/Profile";
import ServicePostingPage from "./components/serviceposting/ServicePostingPage";
import Services from "./components/services/services";
import Booking from "./components/booking/booking";
import ConsumerBookings from "./components/mybookings/mybookings_consumer";
import ProviderBookings from "./components/mybookings/mybookings_provider";
import RatingComment from "./components/ratingReview/RatingComment";
import { DashboardPage } from "./components/admin/pages/DashboardPage";
import VendorRequestPage from "./components/admin/pages/VendorRequestPage";
import VendorsPage from "./components/admin/pages/VendorsPage";
import CustomersPage from "./components/admin/pages/CustomersPage";
import Contact from "./components/contact/contact";
import FAQ from "./components/faq/faq";
import axios from "axios";
import FavoriteList from "./components/favouriteList/Favoutite-list";

function App() {
  const [email, setEmail] = useState("");
  axios.interceptors.request.use((config) => {
    config.headers["Origin"] = "http://localhost:3000";
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="/reset-password-request"
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <ResetPasswordRequest />
            </EmailContext.Provider>
          }
        />

        <Route
          path="/reset-password-confirm"
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <ResetPasswordConfirm />
            </EmailContext.Provider>
          }
        />

        <Route
          path="/update-password"
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <UpdatePassword />
            </EmailContext.Provider>
          }
        />

        <Route path="/profile" element={<LoginRedirect />}>
          <Route index element={<Profile />} />
        </Route>

        <Route path="/ServicePosting" element={<ProviderLogin />}>
          <Route index element={<ServicePostingPage />} />
        </Route>

        <Route path="/Services" element={<ConsumerLogin />}>
          <Route index element={<Services />} />
        </Route>

        <Route path="/favourites" element={<ConsumerLogin />}>
          <Route index element={<FavoriteList />} />
        </Route>

        <Route path="/booking" element={<ConsumerLogin />}>
          <Route index element={<Booking />} />
        </Route>

        <Route path="/consumer_bookings" element={<ConsumerLogin />}>
          <Route index element={<ConsumerBookings />} />
        </Route>

        <Route path="/provider_bookings" element={<ProviderLogin />}>
          <Route index element={<ProviderBookings />} />
        </Route>

        <Route path="/rating/:vendorId" element={<LoginRedirect />}>
          <Route index element={<RatingComment />} />
        </Route>

        <Route path="/rating/:vendorId/:bookingId" element={<LoginRedirect />}>
          <Route index element={<RatingComment />} />
        </Route>

        <Route path="/admin/dashboard" element={<AdminLogin />}>
          <Route index element={<DashboardPage />} />
        </Route>

        <Route path="/admin/vendor-request" element={<AdminLogin />}>
          <Route index element={<VendorRequestPage />} />
        </Route>

        <Route path="/admin/vendors" element={<AdminLogin />}>
          <Route index element={<VendorsPage />} />
        </Route>

        <Route path="/admin/customers" element={<AdminLogin />}>
          <Route index element={<CustomersPage />} />
        </Route>

        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/faq" element={<FAQ />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
