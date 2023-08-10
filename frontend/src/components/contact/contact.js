// author: Muskan Vazirani

import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/joy/FormHelperText";
import { Box } from "@mui/material";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Contact() {
  const [inputFirstNameValue, setInputFirstNameValue] = React.useState("");
  const [inputLastNameValue, setInputLastNameValue] = React.useState("");
  const [inputEmailValue, setInputEmailValue] = React.useState("");
  const [inputQueryValue, setInputQueryValue] = React.useState("");

  const handleFirstNameChange = (event) => {
    setInputFirstNameValue(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setInputLastNameValue(event.target.value);
  };
  const handleEmailChange = (event) => {
    setInputEmailValue(event.target.value);
  };
  const handleQueryChange = (event) => {
    setInputQueryValue(event.target.value);
  };

  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [queryError, setQueryError] = React.useState("");
  const handleSubmit = () => {
    var emailValidRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var containsNumbersRegex = /^[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;

    let flag = false;

    if (!inputFirstNameValue || !inputFirstNameValue.length) {
      setFirstNameError("First Name is required");
      flag = true;
    } else {
      if (inputFirstNameValue.match(containsNumbersRegex)) {
        setFirstNameError("First Name must have letters only");
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
        setLastNameError("Last Name must have letters only");
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

    if (!inputQueryValue || !inputQueryValue.length) {
      flag = true;

      setQueryError("This field cannot be empty.");
    } else {
      setQueryError("");
    }

    if (!inputEmailValue.match(emailValidRegex)) {
      if (!inputEmailValue.match(emailValidRegex)) {
        flag = true;
        setEmailError("Email is invalid");
      } else if (
        !inputEmailValue.match(emailValidRegex) &&
        inputEmailValue != ""
      ) {
        flag = true;
        setEmailError("Email is invalid");
      }
    }
    if (
      !inputFirstNameValue.length &&
      !inputLastNameValue.length &&
      !inputEmailValue.length &&
      !inputQueryValue.length
    ) {
      alert("Invalid Submission");
    }
    if (!flag) {
      alert("Query Submitted");
      window.location.href = "/";
    }
  };
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginY: 10,
          marginX: 5,
          marginBottom: 20,
        }}
      >
        <h1 style={{ color: "#2d3748", fontSize: "35px" }}>Contact us</h1>
        <br></br>
        <Box sx={{}}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <TextField
              id="outlined-basic"
              color="grey"
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
              color="grey"
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
            color="grey"
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
          <FormControl
            sx={{
              width: "100%",
            }}
          >
            <FormLabel>What can we do for you?</FormLabel>
            <TextField
              multiline
              rows={3}
              fullWidth
              color="grey"
              error={queryError && queryError.length ? true : false}
              required
              placeholder="Enter your query here"
              // minRows={3}
              helperText={queryError}
              onChange={handleQueryChange}
            />
            <FormHelperText>
              Please specify the details in the above box.
            </FormHelperText>
          </FormControl>
        </Box>
        <br></br>
        <Button
          style={{ backgroundColor: "#2d3748" }}
          variant="contained"
          onClick={handleSubmit}
          sx={{ marginTop: "10px" }}
        >
          Submit
        </Button>
      </Box>
      
      <div className="fixed bottom-0 bg-gray-200 w-full">
        <Footer />
      </div>
    </div>
  );
}
