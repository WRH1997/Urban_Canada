import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../../contexts/EmailContext";
import Header from "../header/header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
    <div align="center">
      <Header currentPage="/update-password" />
      <br></br>
      <Box
        component="form"
        alignItems="center"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 500,
        }}
      >
        <h2 align="center">Update password</h2>
        <TextField
          required
          label="New Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          required
          label="Confirm Password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="contained" onClick={updatePassword}>
          Update Password
        </Button>
      </Box>
    </div>
    // <div>
    //   <input
    //     type="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     placeholder="New Password"
    //   />
    //   <input
    //     type="password"
    //     value={confirmPassword}
    //     onChange={(e) => setConfirmPassword(e.target.value)}
    //     placeholder="Confirm New Password"
    //   />
    //   <button onClick={updatePassword}>Update Password</button>
    // </div>
  );
}

export default UpdatePassword;
