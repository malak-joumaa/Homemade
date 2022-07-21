const mongoose = require("mongoose");

const cookSchema = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
  menus: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
    },
  ],
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
});

cookSchema.set("timestamps", true);

module.exports = mongoose.model("Cook", cookSchema);
