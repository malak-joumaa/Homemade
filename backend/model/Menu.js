const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  cook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cook",
  },
  days: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Day",
    },
  ],
});

module.exports = mongoose.model("Menu", menuSchema);
