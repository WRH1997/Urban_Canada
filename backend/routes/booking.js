var express = require('express');
var Booking = require('../models/bookingModel')
var uuid = require('uuid'); // Import the uuid package
var router = express.Router();
const bookingController = require("../controllers/bookingController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<h1>API working</h1>");
});


// router.post('/', async  (req, res, next) => {
//     try {
//         const { time, date, note, status } = req.body; 
//         const { userId } = "g13";

//         const combinedDateTime = `${date}T${time}:00`;
//         const bookingDateTime = new Date(combinedDateTime);

    
//         const newBooking = new Booking({
//           date: combinedDateTime,
//           note: note,
//           status: "pending",
//           userId: userId
//         });
    
//         const savedBooking = await newBooking.save();
    
//         res.json({ message: 'Booking successful!', booking: savedBooking });
//       } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Something went wrong' });
//       }
// });

router.post('/create',bookingController.creatBooking);
  
router.put('/approve/:bookingId', bookingController.approveBooking);
router.put('/complete/:bookingId', bookingController.completeBooking);
  
router.put('/reschedule/:bookingId', bookingController.rescheduleBooking);
  
router.put('/cancel/:bookingId', bookingController.cancelBooking);

router.get('/service-provider/:serviceProviderId',bookingController.getServiceProviderBookings);
router.get('/service-consumer/:serviceConsumerId',bookingController.getServiceConsumerBookings);
  
module.exports = router;
