const mongoose = require('mongoose');

const Booking = mongoose.model('Booking',{

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  note: {
    type: String,
  },
  status: {
    type: String,
    default: false,
  },
  isReviewed: {
    type: Boolean,
    default: false,
  },
  isEdited: {
    type: Boolean,
    default: false,
  },
});

module.exports = Booking;
