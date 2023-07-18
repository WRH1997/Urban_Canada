import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import * as yup from "yup";
import Header from "../header/header";
function Profile() {
  const [user, setUser] = useState({}); // User state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        setUser(userData);
        setLoading(false);
      } catch (e) {
        console.error("Error parsing user data:", e);
      }
    } else {
      console.error("No user data in local storage.");
    }
  }, []);

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleGenderChange = (event) => {
    setUser({
      ...user,
      gender: event.target.value,
    });
  };

  const validateUser = (user) => {
    const schema = yup.object().shape({
      firstName: yup
        .string()
        .required("First name is required")
        .matches(/^[a-zA-Z]+$/, "First name should only contain alphabets"),
      lastName: yup
        .string()
        .required("Last name is required")
        .matches(/^[a-zA-Z]+$/, "Last name should only contain alphabets"),
      phoneNumber: yup
        .string()
        .nullable()
        .transform((value, originalValue) => {
          return originalValue === "" ? null : value;
        })
        .matches(/^(\+\d{1,3}) \d{7,14}$/, "Phone number is not valid"),
      bio: yup.string(),
      gender: yup.string().required("Gender is required"),
    });

    return schema.validate(user);
  };
  const handleUpdateProfile = async (event) => {
    event.preventDefault();

    try {
      const validatedUser = await validateUser(user);

      const response = await axios.put(
        `http://localhost:3001/${validatedUser._id}`,
        validatedUser
      );

      localStorage.setItem("userData", JSON.stringify(response.data));

      // Update user state with the updated user data
      setUser(response.data);

      alert("Profile updated successfully");
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        alert(` Error: ${error.errors.join(", ")}`);
      } else {
        console.error("Error updating profile: ", error);
      }
    }
  };

  return (
    <Box>
      <Header currentPage="/login" />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={2}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Box
            component="form"
            onSubmit={handleUpdateProfile}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2, // replace 2 with desired space between items
              width: "100%",
              maxWidth: 500, // max width of the form
            }}
          >
            <h2 align="center">Update Profile</h2>
            <FormControl component="fieldset">
              <FormLabel id="user-role-label" align="center">
                User Role
              </FormLabel>
              <RadioGroup
                row
                align="center"
                aria-labelledby="user-role-label"
                name="role"
                value={user.role}
              >
                <FormControlLabel
                  value="service-provider"
                  control={<Radio />}
                  label="Service Provider"
                  // disabled
                  // sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                  sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                    },
                  }}
                />
                <FormControlLabel
                  value="service-consumer"
                  control={<Radio />}
                  label="Service Consumer"
                  // disabled
                  // sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                  sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
            <TextField
              label="First Name"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              required
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              required
              fullWidth
            />
            <TextField
              label="Email"
              value={user.email}
              InputProps={{
                readOnly: true,
                style: { color: "rgba(0, 0, 0, 0.6)" },
              }}
              fullWidth
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" align="center">
                Gender
              </FormLabel>
              <RadioGroup
                row
                align="center"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="gender"
                value={user.gender}
                onChange={handleGenderChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Phone Number (Format: +XX XXXXXXXX)"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Bio"
              name="bio"
              value={user.bio}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
              sx={{ p: 0, m: 0 }}
              //   InputProps={{
              //     disableUnderline: true,
              //     // sx: {
              //     //   "&:focus": {
              //     //     outline: "none",
              //     //   },
              //     // },
              //   }}
            />
            <Button
              type="submit"
              style={{ backgroundColor: "#2d3748" }}
              variant="contained"
            >
              Update Profile
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Profile;
