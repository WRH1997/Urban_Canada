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
    if (service && service._id) {
      // If editing a service
      setSelectedService(service);
      setIsEditing(true);
    } else {
      // If creating a service
      setSelectedService({
        vendorID: vendorID,
        serviceName: "",
        serviceDesc: "",
        pricePerHour: "",
        category: "",
        serviceImg: "",
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
      
  // const [formData, setFormData] = useState({
  //     vendorID: vendorID,
  //     serviceName: "",
  //     serviceDesc: "",
  //     pricePerHour: "",
  //     category: "",
  //     serviceImg: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedService({
      ...selectedService,
      [name]: value,
    });
  };
  //modified to handle both creates and updates for less code
  const handleCreateService = (e) => {
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
      //Do nothing?
    }
  };

  if (!services || services.length === 0) {
      return <div>No services found.</div>;
  }
  return (
  <div >
    <div>
      <div className="button-container">
        <Button variant="outlined" onClick={handleClickOpen} classname= "create-service-button">
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
          />


          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreateService}>{isEditing ? "Save" : "Create"}</Button>
          </DialogActions>
      </Dialog>
  </div>

  <div >
    <div className="service-cards-container">
      {services.map((service) => (
      <Card key={service._id} sx={{ maxWidth: 345 }} className="service-card">
          <CardMedia
          sx={{ height: 140 }}
          image={service.serviceImg}
          title={service.serviceName}
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Service: {service.serviceName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
              Category: {service.category}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
              Hourly Rate: ${service.pricePerHour.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {service.serviceDesc}
          </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" onClick={() => handleClickOpen(service)}>Edit</Button>
          <Button size="small" onClick= {() => onDelete(service._id)}>Delete</Button>
          </CardActions>
      </Card>
      ))}
    </div>
  </div>
</div>
);};

