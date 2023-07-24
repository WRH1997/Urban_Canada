// author: Muskan Vazirani

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../../contexts/EmailContext";
import Header from "../header/header";
import Footer from "../footer/footer";
import axios from "axios";

function ResetPasswordRequest() {
  const { email, setEmail } = useContext(EmailContext);
  const navigate = useNavigate();

  const sendResetCode = async () => {
    try {
      await axios.post("http://localhost:3001/reset-password-request", {
        email: email,
      });
      navigate("/reset-password-confirm");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        console.log(error.response.status);
        if (error.response.status === 404) {
          alert(error.response.data.message);
        }
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
              Verification Email
            </label>
            <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
              <input
                id="outlined-basic"
                required
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                className="block flex-1 border-0 bg-transparent py-1.5 w-80 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            variant="contained"
            onClick={sendResetCode}
            className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Request OTP
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

export default ResetPasswordRequest;