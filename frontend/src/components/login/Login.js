import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

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
                  navigate("/booking");
                } else {
                  // Error handling
                  console.log("Error storing data in local storage");
                }
              })
              .catch((error) => {
                // Error handling
                console.log(error);
              });
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 403) {
            alert(error.response.data.message);
          } else {
            // Handle other errors
            console.log(error);
          }
        });
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <Header currentPage="/login" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div align="center">
          <h1 className="my-10" style={{ fontSize: "35px" }}>
            Login
          </h1>
          <TextField
            style={{ width: "200px" }}
            id="outlined-basic"
            required
            label="Email"
            variant="outlined"
            onChange={handleEmailChange}
          />
          <br></br>
          <br></br>
          <TextField
            style={{ width: "200px" }}
            required
            label="Password"
            type={showPassword ? "text" : "password"}
            onChange={handlePasswordChange}
            InputProps={{
              // <- This is where the toggle button is added
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
          />
          <br></br>
          <br></br>
          <Button
            style={{ backgroundColor: "#2d3748" }}
            variant="contained"
            onClick={handleLogin}
          >
            Log in
          </Button>
          <br></br>
          <br></br>
          <Link to="/signup" className="text-gray-800 no-underline">
            <p variant="contained">New User? Register</p>
          </Link>
        </div>

        <Footer />
      </Box>
    </div>
  );
}
