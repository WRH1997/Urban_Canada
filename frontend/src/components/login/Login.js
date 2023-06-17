import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "../header/header";

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
      <div align="center">
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
      </div>
    </div>
  );
}
