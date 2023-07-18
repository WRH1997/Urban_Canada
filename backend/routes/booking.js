var express = require('express');
var Booking = require('../models/bookingModel')
var uuid = require('uuid'); // Import the uuid package
var router = express.Router();


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

router.post('/', async (req, res) => {
    try {

      const { time, date, note, userId } = req.body;
      const combinedDateTime = `${date}T${time}:00`;
  
      const newBooking = new Booking({
        bookingId: uuid.v4(), 
        date: combinedDateTime,
        note: note,
        status: "pending",
        userId: undefined,
      });
  
      const savedBooking = await newBooking.save();
  
      res.json({ message: 'Booking successful!', booking: savedBooking });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  
  router.put('/approve/:bookingId', async (req, res) => {
    try {

      const { bookingId } = req.params;
      const booking = await Booking.findById(bookingId);
  
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
  
      booking.status = 'approved';
      const updatedBooking = await booking.save();
  
      res.json({ message: 'Booking approved successfully!', booking: updatedBooking });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  
  router.put('/reschedule/:bookingId', async (req, res) => {
    try {
      const { bookingId } = req.params;
      const { time, date } = req.body;
  
      const booking = await Booking.findById(bookingId);
  
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
  
      const combinedDateTime = `${date}T${time}:00`;
  
      booking.date = combinedDateTime;
      const updatedBooking = await booking.save();
  
      res.json({ message: 'Booking rescheduled successfully!', booking: updatedBooking });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  
  router.put('/cancel/:bookingId', async (req, res) => {
    try {
      const { bookingId } = req.params;
        const booking = await Booking.findById(bookingId);
  
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
  
      booking.status = 'cancelled';
      const updatedBooking = await booking.save();
  
      res.json({ message: 'Booking canceled successfully!', booking: updatedBooking });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  
module.exports = router;
