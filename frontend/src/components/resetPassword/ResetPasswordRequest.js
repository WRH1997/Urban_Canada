import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../../contexts/EmailContext";
import Header from "../header/header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
    <div align="center">
      <Header currentPage="/reset-password-request" />
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
        <h3>Verification Email</h3>
        <TextField
          id="outlined-basic"
          required
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" onClick={sendResetCode}>
          Get Code
        </Button>
      </Box>
      {/* <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={sendResetCode}>Send Code</button> */}
    </div>
  );
}

export default ResetPasswordRequest;
