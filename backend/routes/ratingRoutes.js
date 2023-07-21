var express = require('express');
var ratingController = require('../controllers/ratingController')
var router = express.Router();


router.get('/getRating', ratingController.getRating);
router.post('/addRating',ratingController.addRating);

module.exports = router;
