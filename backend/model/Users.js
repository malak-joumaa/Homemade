const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  last_name: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 2024,
  },
  phone_number: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  profile_photo: {
    type: String,
    min: 6,
    max: 50,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  user_type: {
    type: String,
    min: 6,
    max: 50,
  },
});

module.exports = mongoose.model("user", userSchema);
