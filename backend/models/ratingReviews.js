// author: Darshil Patel

const mongoose = require("mongoose");

const RatingReviewSchema = new mongoose.Schema({

    name: String,
    comment: String,
    star: Number,
    vendorId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    bookingId:{
      type: mongoose.Schema.ObjectId,
      ref: 'Booking',
      required: false
    }
},{timestamps: true});

module.exports = mongoose.model("RatingReview",RatingReviewSchema,"ratingreviews")