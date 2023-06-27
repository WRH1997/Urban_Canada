import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Login from "../login/Login";
import { Box } from "@mui/material";

export default function Signup() {
  const [inputFirstNameValue, setInputFirstNameValue] = React.useState("");
  const [inputLastNameValue, setInputLastNameValue] = React.useState("");
  const [inputEmailValue, setInputEmailValue] = React.useState("");
  const [inputConfirmEmailValue, setInputConfirmEmailValue] =
    React.useState("");
  const [inputPasswordValue, setInputPasswordValue] = React.useState("");
  const [inputConfirmPasswordValue, setInputConfirmPasswordValue] =
    React.useState("");

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

  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [confirmEmailError, setConfirmEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");

  const handleSignUp = () => {
    var emailValidRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var passwordValidRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var containsNumbersRegex = /[0-9]/g;

    let flag = false;

    if (!inputFirstNameValue || !inputFirstNameValue.length) {
      setFirstNameError("First Name is required");
      flag = true;
    } else {
      if (inputFirstNameValue.match(containsNumbersRegex)) {
        setFirstNameError("First Name cannot have numbers");
        flag = true;
      } else {
        setFirstNameError("");
      }
    }

    if (!inputLastNameValue || !inputLastNameValue.length) {
      setLastNameError("Last Name is required");
      flag = true;
    } else {
      if (inputLastNameValue.match(containsNumbersRegex)) {
        setLastNameError("Last Name cannot have numbers");
        flag = true;
      } else {
        setLastNameError("");
      }
    }

    if (!inputEmailValue || !inputEmailValue.length) {
      setEmailError("Email is required");
      flag = true;
    } else {
      setEmailError("");
    }
    if (!inputConfirmEmailValue || !inputConfirmEmailValue.length) {
      setConfirmEmailError("Confirm email is required");
      flag = true;
    } else {
      setConfirmEmailError("");
    }
    if (!inputPasswordValue || !inputPasswordValue.length) {
      setPasswordError("Password is required");
      flag = true;
    } else {
      setPasswordError("");
    }
    if (!inputConfirmPasswordValue || !inputConfirmPasswordValue.length) {
      setConfirmPasswordError("Confirm Password is required");
      flag = true;
    } else {
      setConfirmPasswordError("");
    }
    if (inputEmailValue != inputConfirmEmailValue) {
      setConfirmEmailError("Email doesn't match");
      flag = true;
    }
    if (inputPasswordValue != inputConfirmPasswordValue) {
      setConfirmPasswordError("Password doesn't match");
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
        setEmailError("Email is invalid");
      } else if (
        !inputEmailValue.match(emailValidRegex) &&
        inputEmailValue != ""
      ) {
        flag = true;
        setEmailError("Email is invalid");
      } else if (
        !inputPasswordValue.match(passwordValidRegex) &&
        inputPasswordValue != ""
      ) {
        flag = true;
        alert(
          "Password should contain at least one symbol, one upper case, one lower case and a number"
        );
        setPasswordError("Invalid Password");
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
      alert("Form Submitted");
      window.location.href = "/";
    }
  };
  return (
    <div>  
    <Header currentPage="/login"  />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className="my-10" style={{fontSize: "35px"}}>Register</h1>
      <Box sx={{}}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            id="outlined-basic"
            error={firstNameError && firstNameError.length ? true : false}
            required
            label="First Name"
            variant="outlined"
            helperText={firstNameError}
            onChange={handleFirstNameChange}
          />
          &nbsp;&nbsp;
          <TextField
            id="outlined-basic"
            error={lastNameError && lastNameError.length ? true : false}
            required
            label="Last Name"
            variant="outlined"
            helperText={lastNameError}
            onChange={handleLastNameChange}
          />
        </Box>
        <br></br>
        <TextField
          id="outlined-basic"
          error={emailError && emailError.length ? true : false}
          required
          label="Email"
          sx={{
            width: "100%",
          }}
          variant="outlined"
          helperText={emailError}
          onChange={handleEmailChange}
        />
        <br></br>
        <br></br>
        <TextField
          id="outlined-basic"
          error={confirmEmailError && confirmEmailError.length ? true : false}
          required
          label="Confirm Email"
          sx={{
            width: "100%",
          }}
          variant="outlined"
          helperText={confirmEmailError}
          onChange={handleConfirmEmailChange}
        />
        <br></br>
        <br></br>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            error={passwordError && passwordError.length ? true : false}
            required
            label="Password"
            type="password"
            helperText={passwordError}
            onChange={handlePasswordChange}
          />
          &nbsp;&nbsp;
          <TextField
            error={
              confirmPasswordError && confirmPasswordError.length ? true : false
            }
            required
            label=" Confirm Password"
            type="password"
            helperText={confirmPasswordError}
            onChange={handleConfirmPasswordChange}
          />
        </Box>
        <br></br>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" align="center">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>{" "}
          <br></br>
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel id="demo-simple-select-label">User Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={User Role}
              label="User Role"
              defaultValue="serviceconsumer"

              // onChange={handleChange}
            >
              <MenuItem value="serviceconsumer">Service Consumer</MenuItem>
              <MenuItem value="serviceprovider">Service Provider</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br></br>
      </Box>
      <Button
        style={{backgroundColor: "#2d3748"}}
        variant="contained"
        onClick={handleSignUp}
      >
        Sign up
      </Button>
      <br></br>
      <Link to="/login" className="text-gray-800 no-underline">
        <p variant="contained">Alredy have an account? Log in</p>
      </Link>
    </Box>





        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" align="center">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>{" "}
          <br></br>
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel id="demo-simple-select-label">User Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={User Role}
              label="User Role"
              defaultValue="serviceconsumer"

              // onChange={handleChange}
            >
              <MenuItem value="serviceconsumer">Service Consumer</MenuItem>
              <MenuItem value="serviceprovider">Service Provider</MenuItem>
            </Select>
          </FormControl>
        </Box> */}

    {/* <form
        className="max-w-sm bg-white pt-10 pb-24 m-auto"
        method="GET"
      >
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
                  label="First Name"
                  variant="outlined"
                  helperText={firstNameError}
                  onChange={handleFirstNameChange}
                  type="text"
                  name="firstname"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
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
                  error={confirmEmailError && confirmEmailError.length ? true : false}
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
                    confirmPasswordError && confirmPasswordError.length ? true : false
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
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              onClick={handleSignUp}
              className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
      </form> */}
    <Footer/>
    </div>
  );
}
