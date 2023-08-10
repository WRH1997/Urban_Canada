// author: Muskan Vazirani

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["service-provider", "service-consumer"],
  },
  isValidated: {
    type: Boolean,
    default: function () {
      return this.userType === "service-consumer";
    },
  },
  isBlocked: {
    type: Boolean,
    required: true,
    default: false,
  },
  bio: { type: String, required: false },
  phoneNumber: {
    type: String,
    required: false,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  resetPasswordToken: { type: String, required: false },
  resetPasswordExpires: { type: Date, required: false },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);
