const User = require("../models/users");

exports.addToWishlist= async (req, res) => {
  const { userId, serviceId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.wishlist.includes(serviceId)) {
      user.wishlist.push(serviceId);
      await user.save();
      return res.status(200).json({ message: "Service added to wishlist" });
    } else {
      return res.status(409).json({ message: "Service already in wishlist" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
}

exports.removeFromWishlist = async(req, res) => {
  const { userId, serviceId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.wishlist.includes(serviceId)) {
      user.wishlist.pull(serviceId);
      await user.save();
      return res.status(200).json({ message: "Service removed from wishlist" });
    } else {
      return res.status(409).json({ message: "Service not in wishlist" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
}

exports.getUserWishlist= async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("User id:" + userId);
    const user = await User.findById({ _id: userId });
    console.log("User:" + user);

    if (!user) {
      return res.json({ success: false, message: "User not found." });
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error retrieving user data." });
  }
}