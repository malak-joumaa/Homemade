const mongoose = require("mongoose");

const daySchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
});

module.exports = mongoose.model("Day", daySchema);
