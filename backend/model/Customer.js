const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  categories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  submitted_orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubmittedOrder",
    },
  ],
});

module.exports = mongoose.model("Customer", customerSchema);
