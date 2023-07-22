var RatingReview = require('../models/ratingReviews')


exports.getRating = async (req, res) => {
    try {
      const vendorId = req.params.vendorId;
      const ratingReviews = await RatingReview.find({vendorId }).exec();
      res.status(200).json(ratingReviews);
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Error fetching rating reviews' });
    }
};

exports.postRating = async (req, res) => {
  try {
    const { name, comment, star, consumerId, vendorId } = req.body;

    // Create a new rating review
    const ratingReview = new RatingReview({
      name,
      comment,
      star,
      consumerId,
      vendorId,
    });

    // Save the rating review to the database
    const savedRating = await ratingReview.save();

    res.status(201).json({ message: 'Rating review posted successfully', ratingReview: savedRating });
  } catch (error) {
    console.error('Error posting rating review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
