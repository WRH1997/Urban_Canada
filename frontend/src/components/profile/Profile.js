// author: Muskan Vazirani

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import * as yup from "yup";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";
import {  Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Footer from "../footer/footer";

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
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleDeleteAccount = async () => {
    const confirmation = window.confirm("Do you want to delete your account?");

    if (confirmation) {
      try {
        await axios.delete(`http://localhost:3001/${user._id}`);
        logout(); // Call the logout function
        alert("Your account has been deleted");
        navigate("/");
      } catch (error) {
        console.error("Error deleting account: ", error);
      }
    }
  };

  return (
    <div>
    <Header currentPage="/login" />
    {loading ? (
          <div>Loading...</div>
        ) : (

    <form className="max-w-sm bg-white mx-auto mt-10 mb-32" onSubmit={handleUpdateProfile}>
      <div class="mx-8">
        <h2 className="text-base font-semibold leading-7 text-xl text-gray-900">
          Profile
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
                label="First Name"
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
                required
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                label="Last Name"
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
                required
                type="text"
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
                label="Email"
                value={user.email}
                type="email"
                name="email"
                disabled
                className="block flex-1 border-0 bg-transparent py-1.5 w-80 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
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
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                    value={user.gender}
                    onChange={handleGenderChange}
                    color="grey"
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
                    aria-labelledby="user-role-label"
                    name="role"
                    value={user.role}
                    color="grey"
                  >
                    <FormControlLabel
                      value="service-provider"
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
                      label={<Typography variant="body1" sx={{ fontSize: '15px' }}>Service Provider</Typography>}
                    />
                    <FormControlLabel
                      value="service-consumer"
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
                      label={<Typography variant="body1" sx={{ fontSize: '15px' }}>Service Consumer</Typography>}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </div>
          </div>

          <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Bio
              </label>

              <div className="mt-2">
                <div className="flex rounded-md ring-1 ring-gray-300">
                  <textarea
                    label="Bio"
                    name="bio"
                    value={user.bio}
                    onChange={handleInputChange}
                    type="textarea"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>


        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            variant="contained"
            type="submit"
            className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update Profile
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            variant="contained"
            
            onClick={handleDeleteAccount}
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Delete Account
          </button>
        </div>

      </div>
    </form>

        )}
    <div className="fixed bottom-0 bg-gray-200 w-full">
        <Footer />
      </div>
  </div>
  
 
  );
}

export default Profile;