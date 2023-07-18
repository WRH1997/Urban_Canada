const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User(req.body);
    await user.save();

    const payload = { userId: user.id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    if (user.isBlocked || !user.isValidated) {
      return res
        .status(403)
        .json({ message: "Access restricted, contact admin." });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = { userId: user.id };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;

        // Create a copy of user object
        // let userResponse = user.toObject();
        const userResponse = {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          role: user.role,
          isValidated: user.isValidated,
          isBlocked: user.isBlocked,
          bio: user.bio,
          phoneNumber: user.phoneNumber,
        };
        console.log(userResponse);
        // Delete the password from the response
        // delete userResponse.password;

        res.status(200).json({ token, user: userResponse });
      }
    );
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateProfile = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
