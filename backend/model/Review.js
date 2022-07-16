const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true,
  },
  cook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cook",
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
});

module.exports = mongoose.model("Review", reviewSchema);
