import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Login() {
  const [inputEmailValue, setInputEmailValue] = React.useState("");
  const [inputPasswordValue, setInputPasswordValue] = React.useState("");
  const handleEmailChange = (event) => {
    setInputEmailValue(event.target.value);
    console.log("Event change");
  };
  const handlePasswordChange = (event) => {
    setInputPasswordValue(event.target.value);
  };
  const handleLogin = () => {
    var emailValidRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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
      window.location.href = "/booking";
    }
  };
  return (
    <div>  
      <Header currentPage="/login"  />

      {/* <div align="center">
        <h1>Login Page</h1>
        <TextField
          id="outlined-basic"
          required
          label="Email"
          variant="outlined"
          onChange={handleEmailChange}
        />
        <br></br>
        <br></br>
        <TextField
          required
          label="Password"
          type="password"
          onChange={handlePasswordChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" onClick={handleLogin}>
          Log in
        </Button>
        &nbsp;&nbsp;
        <Link to="/signup">
          <Button variant="contained">New User? Sign up</Button>
        </Link>
      </div> */}

      <form
        className="max-w-sm bg-white py-10 m-auto"
        action="/MyBookings"
        method="GET"
      >
        <div class="mx-14 ml-0">
          <h2 className="text-base font-semibold leading-7 text-3xl text-gray-900">
            Login
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-max">
            <div className="sm:col-span-4 ">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md ring-1 ring-gray-300">
                  <input
                    type="text"
                    name="username"
                    id="outlined-basic"
                    required
                    label="Email"
                    variant="outlined"
                    onChange={handleEmailChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 w-80 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 ">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md ring-1 ring-gray-300">
                  <input
                    name="password"
                    required
                    label="Password"
                    type="password"
                    onChange={handlePasswordChange}
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
              Login
            </button>
            <a href="/signup"> 
              New User? SignUp
            </a>
          </div>
        </div>
      </form>
      
      <Footer/>
    </div>
  );
}
