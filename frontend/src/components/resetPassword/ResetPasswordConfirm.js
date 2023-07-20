import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../../contexts/EmailContext";
import Header from "../header/header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function ResetPasswordConfirm() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const { email } = useContext(EmailContext);

  const confirmResetCode = async () => {
    try {
      await axios.post("http://localhost:3001/reset-password-confirm", {
        email: email,
        resetPasswordToken: code,
      });
      navigate("/update-password");
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
      <Header currentPage="/reset-password-confirm" />
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
        <h3>Verification Code</h3>
        <TextField
          id="outlined-basic"
          required
          label="Code"
          value={code}
          variant="outlined"
          onChange={(e) => setCode(e.target.value)}
        />
        <Button variant="contained" o onClick={confirmResetCode}>
          Confirm Code
        </Button>
      </Box>
      {/* <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Code"
      />
      <button onClick={confirmResetCode}>Confirm Code</button> */}
    </div>
  );
}

export default ResetPasswordConfirm;
