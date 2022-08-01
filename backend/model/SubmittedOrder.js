const mongoose = require("mongoose");

const submittedSchema = new mongoose.Schema({
  total: {
    type: Number,
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
      type: Array,
    },
  ],
  status: {
    type: String,
    required: true,
  },
  orders: [
    {
      type: Object,
    },
  ],
  cook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cook",
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  rated: {
    type: Boolean,
  },
});

module.exports = mongoose.model("SubmittedOrders", submittedSchema);
