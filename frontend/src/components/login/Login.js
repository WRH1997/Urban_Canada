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

      <div align="center">
        <h1 className="my-10" style={{fontSize: "35px"}}>Login</h1>
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
        <Button style={{backgroundColor: "#2d3748"}} variant="contained" onClick={handleLogin}>
          Log in
        </Button>
        <br></br>
        <br></br>
        <Link to="/signup" className="text-gray-800 no-underline">
          <p variant="contained">New User? Register</p>
        </Link>
      </div>
      
      <Footer/>
    </div>
  );
}
