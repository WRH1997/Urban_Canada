var express = require('express');
var ratingController = require('../controllers/ratingController')
var router = express.Router();


router.get('/getRating/:vendorId', ratingController.getRating);
router.post('/addRating',ratingController.postRating);

module.exports = router;
