const mongoose = require("mongoose");

const cookSchema = new mongoose.Schema({
  rate: {
    type: Number,
  },
  description: {
    type: String,
  },
  opening_hours: [
    {
      type: String,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  submittedOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubmittedOrder",
    },
  ],
});

cookSchema.set("timestamps", true);

module.exports = mongoose.model("Cook", cookSchema);
