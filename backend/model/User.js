const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
  },
  profile_photo: {
    type: String,
  },
  location: {
    coordinates: {
      type: [Number],
    },
    location: {
      type: String,
    },
  },
  user_type: {
    type: String,
    required: true,
  },
  firebase_token: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
