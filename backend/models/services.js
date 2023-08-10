// author: Waleed Alhindi

const mongoose = require("mongoose");

//Mongoose auto-gens an ID for the object when none
//are specified

const ServiceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },

  vendorID: {
    type: String,
    required: true,
  },

  vendorName: {
    type: String,
    required: true,
  },

  vendorLocation: {
    type: String,
    required: true,
  },

  serviceDesc: {
    type: String,
    required: true,
  },

  pricePerHour: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    enum: ["Cleaning", "Repair", "Moving", "Carpentry", "Landscaping", "Other"],
    default: "Other",
  },

  serviceImg: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Service", ServiceSchema, "services");
