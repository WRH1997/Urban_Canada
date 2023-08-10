// Author: Edwin Adams

const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  booking_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Booking',
    required: true
  },
  recipient_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["Booking Created", "Booking Approved", "Booking Completed", "Booking Canceled", "Review Added", "Booking Reschedule"],
    required: true
  },
  status: {
    type: String,
    enum: ["Unread", "Read", "Archived"],
    default: "Unread"
  }
}, { timestamps: true });

module.exports = mongoose.model("Notification", NotificationSchema, "Notifications");

