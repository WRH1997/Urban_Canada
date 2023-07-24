// author: Muskan Vazirani

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Header from "../header/header";
import Footer from "../footer/footer";
import axios from "axios";

export default function Login() {
  const [inputEmailValue, setInputEmailValue] = React.useState("");
  const [inputPasswordValue, setInputPasswordValue] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setInputEmailValue(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setInputPasswordValue(event.target.value);
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    navigate("/reset-password-request");
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    var emailValidRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    var passwordValidRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (
      !inputEmailValue.match(emailValidRegex) &&
      !passwordValidRegex.test(inputPasswordValue)
    ) {
      alert("Invalid Email and Password");
    } else if (!inputEmailValue.match(emailValidRegex)) {
      alert("Invalid Email");
    } else if (!inputPasswordValue.match(passwordValidRegex)) {
      alert("Incorrect Password");
    } else {
      // Request to server
      const userData = {
        email: inputEmailValue,
        password: inputPasswordValue,
      };
      axios
        .post("http://localhost:3001/login", userData)
        .then((response) => {
          if (response.status === 200) {
            const { token, user } = response.data;
            delete userData.password;
            localStorage.setItem("authToken", token);
            localStorage.setItem("userData", JSON.stringify(user));
            Promise.all([
              new Promise((resolve) =>
                resolve(localStorage.getItem("authToken"))
              ),
              new Promise((resolve) =>
                resolve(localStorage.getItem("userData"))
              ),
            ])
              .then(([authToken, userData]) => {
                if (authToken && userData) {
                  setInputEmailValue("");
                  setInputPasswordValue("");
                  const loggedin_user = JSON.parse(localStorage.getItem("userData"))
                  if(loggedin_user != null && loggedin_user.role == "admin"){
                    navigate("/admin/dashboard")
                  }else{
                    navigate("/")
                  }
                } else {
                  console.log("Error storing data in local storage");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 400) {
              alert("Invalid credentials");
            } else if (error.response.status === 403) {
              alert("Access restricted, contact admin.");
            } else if (error.response.status === 500) {
              alert("Server error");
            } else {
              console.log(error);
            }
          } else {
            alert("An error occurred: " + error);
          }
        });
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <Header currentPage="/login" />

      <form className="max-w-sm bg-white pt-10 pb-32 m-auto" method="GET">
        <div class="mx-8">
          <h2 className="text-base font-semibold leading-7 text-xl text-gray-900">
            Login
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-4">
            <div className="sm:col-span-4 w-full">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
                <input
                  id="outlined-basic"
                  required
                  label="Email"
                  variant="outlined"
                  onChange={handleEmailChange}
                  type="email"
                  name="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 w-80 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md ring-1 ring-gray-300">
                  <input
                    required
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    onChange={handlePasswordChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    name="password"
                    className="block flex-1 border-0 bg-transparent py-1.5 w-80 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              variant="contained"
              onClick={handleLogin}
              className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <a
              href="/reset-password-request"
              className="text-sm no-underline font-semibold leading-6 text-gray-800 hover:underline"
              onClick={handleForgotPassword}
            >
              Forgot Password? Reset
            </a>
          </div>

          <div className="mt-1 flex items-center justify-center gap-x-6">
            <a
              href="/signup"
              className="text-sm no-underline font-semibold leading-6 text-gray-800 hover:underline"
            >
              New User? Register
            </a>
          </div>
        </div>
      </form>
      <div className="fixed bottom-0 bg-gray-200 w-full">
        <Footer />
      </div>
    </div>
  );
}