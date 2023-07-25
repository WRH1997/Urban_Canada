// author: HARSH NARESHBHAI KATHIRIA

var express = require('express');
var Booking = require('../models/bookingModel')
var uuid = require('uuid');
var router = express.Router();
const bookingController = require("../controllers/bookingController")

router.get('/', function(req, res, next) {
  res.send("<h1>API working</h1>");
});

router.post('/create',bookingController.creatBooking);
  
router.put('/approve/:bookingId', bookingController.approveBooking);
router.put('/complete/:bookingId', bookingController.completeBooking);
  
router.put('/reschedule/:bookingId', bookingController.rescheduleBooking);
  
router.put('/cancel/:bookingId', bookingController.cancelBooking);

router.get('/service-provider/:serviceProviderId',bookingController.getServiceProviderBookings);
router.get('/service-consumer/:serviceConsumerId',bookingController.getServiceConsumerBookings);
  
module.exports = router;