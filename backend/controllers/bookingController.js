// author: HARSH NARESHBHAI KATHIRIA

var Booking = require('../models/bookingModel');
const { ObjectId } = require('mongodb');

exports.creatBooking = async (req, res) => {
  try {

    const { consumer_id, provider_id, service_id, date, note, address } = req.body;

    const newBooking = new Booking({
      date: date,
      note: note,
      consumer_id: new ObjectId(consumer_id),
      provider_id: new ObjectId(provider_id),
      service_id: new ObjectId(service_id),
      address: address
    });

    const savedBooking = await newBooking.save();

    res.status(200).json({ message: 'Booking successful!', booking: savedBooking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

exports.approveBooking = async (req, res) => {
  try {

    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    booking.status = 'Approved';
    const updatedBooking = await booking.save();

    res.status(200).json({ message: 'Booking approved successfully!', booking: updatedBooking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

exports.completeBooking = async (req, res) => {
  try {

    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (booking.status == "Approved") {
      booking.status = 'Completed'
      const updatedBooking = await booking.save();

      res.status(200).json({ message: 'Booking approved successfully!', booking: updatedBooking });
    } else {
      res.status(400).json({ error: 'Cannot complete order that is not approved' });
    }

  } catch (err) {
    onsole.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

exports.rescheduleBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { date } = req.body;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }


    if (booking.status == "Pending" && !booking.isCanceled) {
      booking.date = date;
      const updatedBooking = await booking.save();
      res.status(200).json({ message: 'Booking rescheduled successfully!', booking: updatedBooking });
    } else {
      res.status(400).json({ error: 'Cannot reschedule approved or completed or canceled bookings' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

exports.cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (booking.status == "Pending") {
      booking.isCanceled = true
      const updatedBooking = await booking.save();

      res.status(200).json({ message: 'Booking canceled successfully!', booking: updatedBooking });
    } else {
      res.status(400).json({ error: 'Cannot cancel Approved or Completed bookings' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

exports.getServiceProviderBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ provider_id: req.params.serviceProviderId }).populate("service_id consumer_id provider_id");

    res.status(200).json(bookings)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

exports.getServiceConsumerBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ consumer_id: req.params.serviceConsumerId }).populate("service_id consumer_id provider_id");

    res.status(200).json(bookings)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}