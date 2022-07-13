const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  cook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cook",
  },
  dishes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dish",
    },
  ],
  days: [{ type: String }],
});

module.exports = mongoose.model("Menu", menuSchema);
