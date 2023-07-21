const mongoose = require("mongoose");

const RatingReviewSchema = new mongoose.Schema({

    name: String,
    comment: String,
    star: Number,
    consumerId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    vendorId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    }
});

module.exports = mongoose.model("RatingReview",RatingReviewSchema,"ratingreviews")
