// author: Muskan Vazirani

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../../contexts/EmailContext";
import Header from "../header/header";
import Footer from "../footer/footer";
import axios from "axios";

function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { email } = useContext(EmailContext);

  const updatePassword = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await axios.put("http://localhost:3001/update-password", {
        email: email,
        password: password,
      });

      alert("Password updated");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        console.log(error.response.status);
        // if (error.response.status === 404) {
        alert(error.response.data.message);
        // }
      } else if (error.request) {
        // The request was made but no response was received

        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  return (
    <div>
      
    <Header currentPage="/login" />

    <div className="max-w-sm bg-white pt-10 pb-24 m-auto">
      <div class="mx-8">
        <h2 className="text-base font-semibold leading-7 text-xl text-gray-900">
          Reset Password
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-4">
          <div className="sm:col-span-4 w-full">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              New Password
            </label>
            <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
              <input
                required
                label="New Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="new password"
                className="block flex-1 border-0 bg-transparent py-1.5 w-80 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4 w-full">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
              <input
                required
                label="Confirm Password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirm password"
                className="block flex-1 border-0 bg-transparent py-1.5 w-80 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            variant="contained"
            onClick={updatePassword}
            className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>

    <div className="fixed bottom-0 bg-gray-200 w-full">
        <Footer />
      </div>
  </div>
  );
}

export default UpdatePassword;