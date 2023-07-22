var express = require('express');
var ratingController = require('../controllers/ratingController')
var router = express.Router();


router.get('/getRating/:vendorId', ratingController.getRating);
router.post('/postRating',ratingController.postRating);
router.post('/isReviewed',ratingController.isReviewed);
router.post('/getVendorInfo',ratingController.vendorInfo);

module.exports = router;
