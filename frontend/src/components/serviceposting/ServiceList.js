/*
Author(s): 
- Edwin Adams (B00917930)
*/


import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './ServicePosting.css';

import axios from 'axios';


export default function ServiceList({ services }) {
  console.log(services)
  const [open, setOpen] = React.useState(false);
  const [selectedService, setSelectedService] = useState({});
  const [isEditing, setIsEditing] = useState(false);


  const handleClickOpen = (service) => {
    const userDataString = localStorage.getItem("userData");
    let vendorID = "";
    let vendorName = "";
  
    try {
      const userData = JSON.parse(userDataString);
      vendorID = userData._id;
      vendorName = `${userData.firstName} ${userData.lastName}`;
    } catch (e) {
      console.error("Error parsing user data:", e);
    }
  
    if (service && service._id) {
      // If editing a service
      setSelectedService({
        ...service,
        vendorName: service.vendorName || vendorName, 
      });
      setIsEditing(true);
    } else {
      // If creating a service
      setSelectedService({
        vendorID: vendorID,
        vendorName: vendorName,
        serviceName: "",
        serviceDesc: "",
        pricePerHour: "",
        category: "",
        serviceImg: "",
        location: "", 
      });
      setIsEditing(false);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const userDataString = localStorage.getItem("userData")
  let vendorID = ""
  try {
      const userData = JSON.parse(userDataString);
      vendorID = userData._id
    } catch (e) {
      console.error("Error parsing user data:", e);
    }
      
    const [formErrors, setFormErrors] = useState({
      serviceName: '',
      serviceDesc: '',
      pricePerHour: '',
      category: '',
      serviceImg: '',
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedService({
      ...selectedService,
      [name]: value,
    });
  };

  //modified to handle both creates and updates for less code
  const handleCreateService = (e) => {
    setFormErrors({
      serviceName: '',
      serviceDesc: '',
      pricePerHour: '',
      category: '',
      serviceImg: '',
    });

    let errors = {};

    //validation checks
    if (!selectedService.serviceName) {
      errors.serviceName = 'Service Name is required';
    }
  
    if (!selectedService.serviceDesc) {
      errors.serviceDesc = 'Service Description is required';
    }
  
    if (!selectedService.pricePerHour) {
      errors.pricePerHour = 'Price per hour is required';
    } else if (isNaN(selectedService.pricePerHour)) {
      errors.pricePerHour = 'Price per hour must be a valid number';
    }
  
    if (!selectedService.category) {
      errors.category = 'Service Type is required';
    }
  
    if (!selectedService.serviceImg) {
      errors.serviceImg = 'Image link is required';
    } else if (!isValidImageUrl(selectedService.serviceImg)) {
      errors.serviceImg = 'Please provide a valid image URL';
    }

    if (!selectedService.vendorLocation) {
      errors.vendorLocation = 'Location is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log("sending request");
    setOpen(false);
    e.preventDefault();

    console.log("form data", selectedService);

    // deciding which request to use
    const httpMethod = isEditing ? "put" : "post";
    const url = isEditing
      ? `http://localhost:3001/editService/${selectedService._id}`
      : "http://localhost:3001/createService";

    axios[httpMethod](url, selectedService)
      .then((response) => {
        console.log(
          isEditing ? "Service updated successfully!" : "Service created successfully!",
          response
        );
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
      });
  };

  // helper function to check the url provided
  const isValidImageUrl = (url) => {
    
    const imageRegex = /\.(jpeg|jpg|gif|png|svg|webp)$/i;
    return imageRegex.test(url);
  };



  const onDelete = (serviceId) => {
    console.log("Deleting service with ID:", serviceId);
    const isConfirmed = window.confirm('Are you sure you want to delete this service?');
    const url = `http://localhost:3001/deleteService/${serviceId}`;
    if (isConfirmed) {
      axios
        .delete(url)
        .then((response) => {
          console.log("Service deleted successfully!", response);

          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting service:", error);
        });
    } else {
      //Do nothing? (close form)
    }
  };


  return (
  <div >
    <div>
      <div className="button-container">
        <Button variant="contained" onClick={handleClickOpen} classname= "create-service-button">
            Create Service
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? "Edit Service" : "Create Service"}</DialogTitle>
          <DialogContent>
          <DialogContentText>
              Please fill in the details of your service
          </DialogContentText>
          <TextField
              name = "serviceName"
              autoFocus
              margin="dense"
              id="serviceName"
              label="Service Name"
              type="text"
              fullWidth
              variant="standard"
              value={selectedService.serviceName}
              onChange={handleChange}
              error={!!formErrors.serviceName} 
              helperText={formErrors.serviceName}
          />

          <TextField
              name = "serviceDesc"
              autoFocus
              margin="dense"
              id="serviceDesc"
              label="Service Description"
              type="text"
              fullWidth
              variant="standard"
              value={selectedService.serviceDesc}
              onChange={handleChange}
              error={!!formErrors.serviceDesc}
              helperText={formErrors.serviceDesc}
          />

          <TextField
              name = "pricePerHour"
              autoFocus
              margin="dense"
              id="pricePerHour"
              label="Price per hour"
              type="text"
              value={selectedService.pricePerHour}
              fullWidth
              variant="standard"
              onChange={handleChange}
              error={!!formErrors.pricePerHour}
              helperText={formErrors.pricePerHour}
          />
          

      <br></br><br></br>
      <InputLabel id="category">Service Type</InputLabel>
          <Select
          name = "category"
          labelId="category"
          id="category"
          value={selectedService.category}
          label="Service Type"
          fullWidth
          onChange={handleChange}
          error={!!formErrors.category}
          >
          <MenuItem value="Cleaning">Cleaning</MenuItem>
          <MenuItem value="Repair">Repair</MenuItem>
          <MenuItem value="Moving">Moving</MenuItem>
          <MenuItem value="Carpentry">Carpentry</MenuItem>
          <MenuItem value="Landscaping">Landscaping</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
          </Select>

          <TextField
              name = "serviceImg"
              autoFocus
              margin="dense"
              id="serviceImg"
              label="Image link"
              type="text"
              value={selectedService.serviceImg}
              fullWidth
              variant="standard"
              onChange={handleChange}
              error={!!formErrors.serviceImg}
              helperText={formErrors.serviceImg}
          />

          <TextField
            name="vendorLocation"
            autoFocus
            margin="dense"
            id="vendorLocation"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
            value={selectedService.vendorLocation}
            onChange={handleChange}
            // Add any additional validation or error handling if needed
          />


          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
          <Button onClick={handleCreateService} variant="contained">{isEditing ? "Save" : "Create"}</Button>
          </DialogActions>
      </Dialog>
  </div>

  <div>
        {/* render services if they exist */}
        {services.length > 0 ? (
          <div className="service-cards-container">
            {services.map((service) => (
              <Card key={service._id} sx={{ maxWidth: 345 }} className="service-card">
                <CardMedia sx={{ height: 140 }} image={service.serviceImg} title={service.serviceName} />
                <CardContent className="card-content">
                  <Typography gutterBottom variant="h5" component="div">
                    Service: {service.serviceName}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Category: {service.category}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Hourly Rate: ${service.pricePerHour.toFixed(2)}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Location: {service.vendorLocation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.serviceDesc}
                  </Typography>
                </CardContent>
                <CardActions className="card-actions">
                  <Button size="small" variant="contained" onClick={() => handleClickOpen(service)}>
                    Edit
                  </Button>
                  <Button size="small" variant="contained" color="error" onClick={() => onDelete(service._id)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        ) : (
          <div className="no-services-found">
            <h2>No services found</h2>
          </div>
        )}
      </div>
    </div>
  );
}
