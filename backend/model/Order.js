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

  dish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dish",
  },
  answers: [
    {
      type: String,
    },
  ],
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Orders", orderSchema);
