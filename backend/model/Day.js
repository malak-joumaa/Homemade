const mongoose = require("mongoose");

const daySchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  menus: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
    },
  ],
});

module.exports = mongoose.model("Day", daySchema);
