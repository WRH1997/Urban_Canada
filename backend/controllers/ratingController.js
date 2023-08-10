// author: Darshil Patel

const RatingReview = require("../models/ratingReviews");
const { ObjectId } = require("mongodb");
var Booking = require("../models/bookingModel");
const Service = require("../models//services");
const User = require("../models/users");

const mongoose = require("mongoose");

exports.getRating = async (req, res) => {
  try {
    console.log(req.params);
    const vendorId = new ObjectId(req.params.vendorId);
    const ratingReviews = await RatingReview.find({ vendorId }).exec();
    res.status(200).json(ratingReviews);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching rating reviews" });
  }
};

exports.postRating = async (req, res) => {
  try {
    const { name, comment, star, consumerId, vendorId, bookingId } = req.body;

    const ratingReview = new RatingReview({
      name,
      comment,
      star,
      vendorId: new ObjectId(vendorId),
      bookingId: new ObjectId(bookingId),
    });

    const savedRating = await ratingReview.save();

    console.log(consumerId + "/" + vendorId + "");

    await Booking.updateOne(
      { _id: new ObjectId(bookingId), provider_id: new ObjectId(vendorId) },
      { $set: { isReviewed: true } }
    );

    res
      .status(201)
      .json({
        message: "Rating review posted successfully",
        ratingReview: savedRating,
      });
  } catch (error) {
    console.error("Error posting rating review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.isReviewed = async (req, res) => {
  try {
    const bookingId = new ObjectId(req.body.bookingId);
    console.log(bookingId);

    if (!mongoose.isValidObjectId(bookingId)) {
      return res.status(400).json({ error: "Invalid bookingId" });
    }
    const booking = await Booking.findById(bookingId);
    console.log(booking);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const isReviewed = booking.isReviewed;

    return res.json({ isReviewed });
  } catch (error) {
    console.error("Error finding booking:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.vendorInfo = async (req, res) => {
  const vendorId = req.body.vendorId;

  try {
    const services = await Service.find({ vendorID: vendorId });
    const vendorName = await User.findById(
      new ObjectId(vendorId),
      "firstName lastName"
    ).lean();

    const serviceNames = services.map((service) => service.serviceName);
    const serviceLocations = services.map((service) => service.vendorLocation);
    const serviceImg = services.map((service) => service.serviceImg);

    if (!vendorName) {
      return res.status(404).json({ error: "Vendor not found" });
    }

    res.json({
      services: serviceNames,
      vendor: vendorName,
      locations: serviceLocations,
      serviceImg: serviceImg,
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching services" });
  }
};

exports.vendorStars = async (req, res) => {};

exports.averageRating = async (req, res) => {
  try {
    const vendorId = req.params.vendorId;
    // console.log(vendorId);

    const ratingReviews = await RatingReview.find({ vendorId });
    // console.log(ratingReviews);

    if (ratingReviews.length === 0) {
      return res.json({ averageRating: 0, totalReviews: 0 });
    }

    const totalRating = ratingReviews.reduce(
      (sum, review) => sum + review.star,
      0
    );
    const averageRating = totalRating / ratingReviews.length;

    res.json({ averageRating, totalReviews: ratingReviews.length });
  } catch (error) {
    console.error("Error fetching average rating:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
