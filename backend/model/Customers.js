const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  categories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "categories",
    },
  ],
});

module.exports = mongoose.model("customer", customerSchema);
