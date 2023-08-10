// author: Muskan Vazirani

const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

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
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User successfully deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.resetPasswordRequest = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ message: "User doesn't exist" });
  }

  const resetPasswordToken = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  const salt = await bcrypt.genSalt(10);
  const hashedResetPasswordToken = await bcrypt.hash(resetPasswordToken, salt);

  const resetPasswordExpires = Date.now() + 300000; // token expires in 5 mins

  // user.resetPasswordToken = hashedResetPasswordToken;
  // user.resetPasswordExpires = resetPasswordExpires;

  // await user.save();
  await User.updateOne(
    { email: req.body.email },
    {
      $set: {
        resetPasswordToken: hashedResetPasswordToken,
        resetPasswordExpires: resetPasswordExpires,
      },
    },
    { runValidators: false }
  );
  // Define transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: "gmail",
    // type: "SMTP",
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    // logger: true,

    debug: true,
    secureConnection: false,
    auth: {
      user: "urbancanada.company@gmail.com",
      pass: "xcowqbrvpwlwumfe", // app password
      tls: {
        rejectUnauthorized: true,
      },
    },
  });

  const mailOptions = {
    from: "urbancanada.company@gmail.com",
    to: `${user.email}`,
    subject: "Reset Password",
    text:
      "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
      "Please use the following code to reset your password:\n\n" +
      resetPasswordToken +
      "\n\n" +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n",
  };

  // Send email
  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.error("There was an error: ", err);
    } else {
      res.status(200).json({ message: "Recovery email sent." });
    }
  });
};
exports.resetPasswordConfirm = async (req, res) => {
  const { email, resetPasswordToken } = req.body;

  const user = await User.findOne({
    email,
    // resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res
      .status(404)
      .json({ message: "Invalid or expired reset password token" });
  }

  const isMatch = await bcrypt.compare(
    resetPasswordToken,
    user.resetPasswordToken
  );

  if (!isMatch) {
    return res.status(404).json({ message: "Invalid reset password token" });
  }

  res.status(200).json({
    message: "Valid reset password token",
    resetPasswordToken,
  });
};

exports.updatePassword = async (req, res) => {
  const passwordValidRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res
      .status(404)
      .json({ message: "Invalid or expired reset password token" });
  }

  if (!passwordValidRegex.test(req.body.password)) {
    return res
      .status(400)
      .json({ message: "Password does not meet the requirements" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // user.password = hashedPassword;
  // user.password = req.body.password;
  // user.resetPasswordToken = undefined; // Clear the resetPasswordToken field
  // user.resetPasswordExpires = undefined; // Clear the resetPasswordExpires field
  await User.updateOne(
    { email: req.body.email },
    {
      $set: {
        password: hashedPassword,
        resetPasswordToken: undefined, // Clear the resetPasswordToken field
        resetPasswordExpires: undefined, // Clear the resetPasswordExpires field
      },
    },
    { runValidators: false }
  );
  await user.save();

  res.status(200).json({ message: "Password updated successfully" });
};
