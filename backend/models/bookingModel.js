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
    type: Date,
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
  }
},{timestamps: true})

module.exports = mongoose.model("Booking",BookingSchema,"Bookings")

// const mongoose = require('mongoose');

// const Booking = mongoose.model('Booking',{

//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: false,
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   note: {
//     type: String,
//   },
//   status: {
//     type: String,
//     default: false,
//   },
//   isReviewed: {
//     type: Boolean,
//     default: false,
//   },
//   isEdited: {
//     type: Boolean,
//     default: false,
//   },
// });

// module.exports = Booking;
