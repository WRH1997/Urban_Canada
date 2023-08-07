// author: Muskan Vazirani

import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Header from "../header/header";
import Footer from "../footer/footer";
import axios from "axios";

export default function Signup() {
  const UserRoles = {
    SERVICE_CONSUMER: "service-consumer",
    SERVICE_PROVIDER: "service-provider",
  };

  const [inputFirstNameValue, setInputFirstNameValue] = React.useState("");
  const [inputLastNameValue, setInputLastNameValue] = React.useState("");
  const [inputEmailValue, setInputEmailValue] = React.useState("");
  const [inputConfirmEmailValue, setInputConfirmEmailValue] =
    React.useState("");
  const [inputPasswordValue, setInputPasswordValue] = React.useState("");
  const [inputConfirmPasswordValue, setInputConfirmPasswordValue] =
    React.useState("");
  const [userRole, setUserRole] = React.useState(UserRoles.SERVICE_CONSUMER);
  const [gender, setGender] = React.useState("");
  const [isValidated, setIsValidated] = useState(
    userRole === UserRoles.SERVICE_CONSUMER
  );

  const handleFirstNameChange = (event) => {
    setInputFirstNameValue(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setInputLastNameValue(event.target.value);
  };
  const handleEmailChange = (event) => {
    setInputEmailValue(event.target.value);
  };
  const handleConfirmEmailChange = (event) => {
    setInputConfirmEmailValue(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setInputPasswordValue(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setInputConfirmPasswordValue(event.target.value);
  };
  const handleRoleChange = (event) => {
    setUserRole(event.target.value);
    // if user is a service consumer then it is set to true else to false
    setIsValidated(event.target.value === UserRoles.SERVICE_CONSUMER);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [confirmEmailError, setConfirmEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    var emailValidRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var passwordValidRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var containsLettersOnly = /^[A-Za-z]+$/;

    let flag = false;

    if (!inputFirstNameValue || !inputFirstNameValue.length) {
      setFirstNameError("First Name is required.");
      flag = true;
    } else {
      if (inputFirstNameValue.match(containsLettersOnly)) {
        setFirstNameError("");
      } else {
        setFirstNameError("Must contain letters only.");
        flag = true;
      }
    }

    if (!inputLastNameValue || !inputLastNameValue.length) {
      setLastNameError("Last Name is required.");
      flag = true;
    } else {
      if (inputLastNameValue.match(containsLettersOnly)) {
        setLastNameError("");
      } else {
        setLastNameError("Must contain letters only.");
        flag = true;
      }
    }

    if (!inputEmailValue || !inputEmailValue.length) {
      setEmailError("Email is required.");
      flag = true;
    } else {
      setEmailError("");
    }
    if (!inputConfirmEmailValue || !inputConfirmEmailValue.length) {
      setConfirmEmailError("Confirm email is required.");
      flag = true;
    } else {
      setConfirmEmailError("");
    }
    if (!inputPasswordValue || !inputPasswordValue.length) {
      setPasswordError("Password is required.");
      flag = true;
    } else {
      setPasswordError("");
    }
    if (!inputConfirmPasswordValue || !inputConfirmPasswordValue.length) {
      setConfirmPasswordError("Confirm Password is required.");
      flag = true;
    } else {
      setConfirmPasswordError("");
    }
    if (inputEmailValue != inputConfirmEmailValue) {
      setConfirmEmailError("Email doesn't match.");
      flag = true;
    }
    if (inputPasswordValue != inputConfirmPasswordValue) {
      setConfirmPasswordError("Password doesn't match.");
      flag = true;
    }
    if (
      !inputEmailValue.match(emailValidRegex) ||
      !passwordValidRegex.test(inputPasswordValue)
    ) {
      if (
        !inputEmailValue.match(emailValidRegex) &&
        !passwordValidRegex.test(inputPasswordValue)
      ) {
        flag = true;
        setEmailError("Email is invalid.");
      } else if (
        !inputEmailValue.match(emailValidRegex) &&
        inputEmailValue != ""
      ) {
        flag = true;
        setEmailError("Email is invalid.");
      } else if (
        !inputPasswordValue.match(passwordValidRegex) &&
        inputPasswordValue != ""
      ) {
        flag = true;
        setPasswordError(
          "Length should be at least 8. Must contain at least one symbol, upper case, lower case and number."
        );
      }
    }
    if (
      !inputFirstNameValue.length &&
      !inputLastNameValue.length &&
      !inputEmailValue.length &&
      !inputConfirmEmailValue.length &&
      !inputConfirmPasswordValue.length &&
      !inputPasswordValue.length
    ) {
      alert("Invalid Submission");
    }
    if (!flag) {
      let gender = document.querySelector('input[name="gender"]:checked').value;
      console.log(gender);
      try {
        const response = await axios.post("http://localhost:3001/signup", {
          firstName: inputFirstNameValue,
          lastName: inputLastNameValue,
          email: inputEmailValue,
          password: inputPasswordValue,
          gender: gender,
          role: userRole,
          isValidated: isValidated,
          isBlocked: false,
        });
        console.log("User signed up successfully");
        window.location.href = "/login";
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.msg);
          console.log(error.response.status);
          if (error.response.status === 400) {
            alert("User already exists");
          }
        } else if (error.request) {
          // The request was made but no response was received

          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      }
    }
  };

  return (
    <div>
      <Header currentPage="/login" />

      <form className="max-w-sm bg-white pt-10 pb-12 m-auto">
        <div class="mx-8">
          <h2 className="text-base font-semibold leading-7 text-xl text-gray-900">
            Registeration
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-4">
            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
                <input
                  id="outlined-basic"
                  error={firstNameError && firstNameError.length ? true : false}
                  required
                  label="First Name"
                  variant="outlined"
                  helperText={firstNameError}
                  onChange={handleFirstNameChange}
                  type="text"
                  name="firstname"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {firstNameError && (
                <p style={{ color: "red", fontSize: "12px", margin: "0px" }}>
                  {firstNameError}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="time"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
                <input
                  id="outlined-basic"
                  error={lastNameError && lastNameError.length ? true : false}
                  required
                  label="Last Name"
                  variant="outlined"
                  helperText={lastNameError}
                  onChange={handleLastNameChange}
                  type="text"
                  name="lastname"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {lastNameError && (
                <p style={{ color: "red", fontSize: "12px", margin: "0px" }}>
                  {lastNameError}
                </p>
              )}
            </div>

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
                  error={emailError && emailError.length ? true : false}
                  required
                  label="Email"
                  variant="outlined"
                  helperText={emailError}
                  onChange={handleEmailChange}
                  type="email"
                  name="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 w-80 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
              {emailError && (
                <p style={{ color: "red", fontSize: "12px", margin: "0px" }}>
                  {emailError}
                </p>
              )}
            </div>

            <div className="sm:col-span-4 w-full">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Email
              </label>
              <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
                <input
                  id="outlined-basic"
                  error={
                    confirmEmailError && confirmEmailError.length ? true : false
                  }
                  required
                  label="Confirm Email"
                  variant="outlined"
                  helperText={confirmEmailError}
                  onChange={handleConfirmEmailChange}
                  type="email"
                  name="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 w-80 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
              {confirmEmailError && (
                <p style={{ color: "red", fontSize: "12px", margin: "0px" }}>
                  {confirmEmailError}
                </p>
              )}
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
                <input
                  error={passwordError && passwordError.length ? true : false}
                  required
                  label="Password"
                  type="password"
                  helperText={passwordError}
                  onChange={handlePasswordChange}
                  name="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {passwordError && (
                <p style={{ color: "red", fontSize: "12px", margin: "0px" }}>
                  {passwordError}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="time"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
                <input
                  error={
                    confirmPasswordError && confirmPasswordError.length
                      ? true
                      : false
                  }
                  required
                  label=" Confirm Password"
                  type="password"
                  helperText={confirmPasswordError}
                  onChange={handleConfirmPasswordChange}
                  name="confirm_password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {confirmPasswordError && (
                <p style={{ color: "red", fontSize: "12px", margin: "0px" }}>
                  {confirmPasswordError}
                </p>
              )}
            </div>

            <div className="sm:col-span-4 w-full">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2 flex rounded-md">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <FormControl>
                    <RadioGroup
                      row
                      color="grey"
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="gender"
                      onChange={handleGenderChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={
                          <Radio
                            size="small"
                            sx={{
                              color: grey[800],
                              "&.Mui-checked": {
                                color: grey[800],
                              },
                            }}
                          />
                        }
                        label={<Typography variant="body1" sx={{ fontSize: '15px' }}>Female</Typography>}
                      />
                      <FormControlLabel
                        value="male"
                        control={
                          <Radio
                            size="small"
                            sx={{
                              color: grey[800],
                              "&.Mui-checked": {
                                color: grey[800],
                              },
                            }}
                          />
                        }
                        label={<Typography variant="body1" sx={{ fontSize: '15px' }}>Male</Typography>}
                      />
                      <FormControlLabel
                        value="other"
                        control={
                          <Radio
                            size="small"
                            sx={{
                              color: grey[800],
                              "&.Mui-checked": {
                                color: grey[800],
                              },
                            }}
                          />
                        }
                        label={<Typography variant="body1" sx={{ fontSize: '15px' }}>Other</Typography>}
                      />
                    </RadioGroup>
                  </FormControl>{" "}
                </Box>
              </div>
            </div>

            <div className="sm:col-span-4 w-full">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User Role
              </label>
              <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
                <select
                  labelId="demple-select"
                  label="Usero-simple-select-label"
                  id="demo-sim Role"
                  onChange={handleRoleChange}
                  defaultValue={UserRoles.SERVICE_CONSUMER}
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                >
                  <option value={UserRoles.SERVICE_CONSUMER}>
                    Service Consumer
                  </option>
                  <option value={UserRoles.SERVICE_PROVIDER}>
                    Service Provider
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              variant="contained"
              type="submit"
              className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <a
              href="/login"
              className="text-sm no-underline font-semibold leading-6 text-gray-800 hover:underline"
            >
              Already have an account? Login
            </a>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
