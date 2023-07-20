const mongoose = require("mongoose");

const RatingReview= mongoose.model('RatingReview',{
    name: String,
    comment: String,
    star: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
});

module.exports = RatingReview