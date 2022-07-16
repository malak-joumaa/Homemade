const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  pickup_hours: [
    {
      type: String,
      required: true,
    },
  ],
  route: [
    {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
  ],
  date: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
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
  answers: [
    {
      type: String,
    },
  ],
  dishes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dish",
    },
  ],
});

module.exports = mongoose.model("Orders", orderSchema);
