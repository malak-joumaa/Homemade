const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
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

  dishes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dish",
    },
  ],
  answers: [
    {
      type: String,
    },
  ],
  pickup_hours: [
    {
      type: String,
      required: true,
    },
  ],
  status: {
    type: String,
    required: true,
  },
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
});

module.exports = mongoose.model("Orders", orderSchema);
