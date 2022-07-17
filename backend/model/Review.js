const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user_review: {
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
