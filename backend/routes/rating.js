var express = require('express');
var RatingReview = require('../models/ratingReviews')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<h1>API working</h1>");
});


router.get('/getRating', async (req, res) => {
    try {
      const ratingReviews = await RatingReview.find({});
      res.status(200).json(ratingReviews);
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Error fetching rating reviews' });
    }
});

router.post('/addRating', async (req, res) => {

    const fakeRatingReviewData = [
        { name: 'John', comment: 'Awesome work!', star: 5 },
        { name: 'Sarah', comment: 'They Provide the best service Ever!!', star: 4 },
        { name: 'Michael', comment: 'They cleaned my house very neatly!', star: 3 },
        // Add more fake data as needed...
    ];
      
  
    try {
        // await RatingReview.deleteMany({}); // Clear existing data
        await await RatingReview.insertMany(fakeRatingReviewData);


    //   const newRatingReview = new RatingReview({
    //     comment:"heool",
    //     star:"fake Data",
    //   });
  
    //   await newRatingReview.save();
    //   res.json(res);
    } catch (error) {
      res.status(500).json({ error: 'Error adding new rating review' });
    }
});

module.exports = router;
