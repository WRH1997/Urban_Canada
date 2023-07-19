const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/allServices', serviceController.getAllServices);
router.post('/filterServices', serviceController.filterServices);
router.post('/searchServices', serviceController.searchForServices);

module.exports = router;