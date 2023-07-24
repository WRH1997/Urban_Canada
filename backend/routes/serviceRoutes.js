// author: Waleed Alhindi, Edwin Adams

const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/allServices', serviceController.getAllServices);
router.post('/filterServices', serviceController.filterServices);
router.post('/searchServices', serviceController.searchForServices);
router.post('/createService', serviceController.createService);
router.put('/editService/:id', serviceController.editService);
router.delete('/deleteService/:id', serviceController.deleteService);

module.exports = router;