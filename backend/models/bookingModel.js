// author: HARSH NARESHBHAI KATHIRIA

const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  consumer_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  provider_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  service_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Service',
    required: true
  },
  date: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  note: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pending","Approved", "Completed"],
    default: "Pending"
  },
  isCanceled: {
    type: Boolean,
    default: false
  },
  isReviewed:{
    type: Boolean,
    default: false
  }
},{timestamps: true})

module.exports = mongoose.model("Booking",BookingSchema,"Bookings")