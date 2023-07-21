import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Booking from "./components/booking/booking";
import MyBookings from "./components/mybookings/mybookings";
import VendorBookings from "./components/mybookings_provider/mybookings_provider";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Contact from "./components/contact/contact";
import LandingPage from "./components/landingpage/landing";
import FAQ from "./components/faq/faq";
import Profile from "./components/profile/Profile";
import LoginRedirect from "./components/LoginRedirects/LoginRedirect";
import Services from "./components/services/services";
import { DashboardPage } from "./components/admin/pages/DashboardPage";
import VendorRequestPage from "./components/admin/pages/VendorRequestPage";
import VendorsPage from "./components/admin/pages/VendorsPage";
import CustomersPage from "./components/admin/pages/CustomersPage";
import Container from "./components/ratingReview/serviceProvider";
import RatingComment from "./components/ratingReview/RatingComment";
import { EmailContext } from "./contexts/EmailContext";

import ResetPasswordRequest from "./components/resetPassword/ResetPasswordRequest";
import ResetPasswordConfirm from "./components/resetPassword/ResetPasswordConfirm";
import UpdatePassword from "./components/resetPassword/UpdatePassword";

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
        {/* <ProtectedRoute path="/MyBookings" element={<MyBookings />} /> */}
        <Route path="/MyBookings" element={<LoginRedirect />}>
          <Route index element={<MyBookings />} />
        </Route>

        <Route path="/vendor_bookings" element={<VendorBookings />} />

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

        <Route path="/Services" element={<Services />} />

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

        {/* Rating and Review start */}
        <Route path="/ratings" element={<Container />} />
        <Route path="/profileDetails" element={<RatingComment />} />
        {/* Rating and Review end*/}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
