const RatingReview = require('../models/ratingReviews')
const { ObjectId } = require('mongodb');
var Booking = require('../models/bookingModel');
const mongoose = require('mongoose')



exports.getRating = async (req, res) => {
    try {
      console.log(req.params);
      const vendorId = new ObjectId(req.params.vendorId);
      const ratingReviews = await RatingReview.find({ vendorId }).exec();
      res.status(200).json(ratingReviews);
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Error fetching rating reviews' });
    }
};

exports.postRating = async (req, res) => {
  try {
    const { name, comment, star, consumerId, vendorId, bookingId } = req.body;

    const ratingReview = new RatingReview({
      name,
      comment,
      star,
      vendorId: new ObjectId(vendorId),
      bookingId: new ObjectId(bookingId)
    });

    const savedRating = await ratingReview.save();

    console.log(consumerId+"/"+vendorId+"");

    await Booking.updateOne(
      { _id: new ObjectId(bookingId), provider_id: new ObjectId(vendorId) },
      { $set: { isReviewed: true } }
    );

    res.status(201).json({ message: 'Rating review posted successfully', ratingReview: savedRating });
  } catch (error) {
    console.error('Error posting rating review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.isReviewed = async (req, res) => {
  try{

    const bookingId = new ObjectId(req.body.bookingId);
    console.log(bookingId);

    if (!mongoose.isValidObjectId(bookingId)) {
      return res.status(400).json({ error: 'Invalid bookingId' });
    }
    const booking = await Booking.findById(bookingId);
    console.log(booking);

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    const isReviewed = booking.isReviewed;

    return res.json({ isReviewed });
  } catch (error) {
    console.error('Error finding booking:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}


exports.vendorInfo = async (req, res) => {
  
}
