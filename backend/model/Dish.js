const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
  },
  questions: {
    type: Array,
  },
});

module.exports = mongoose.model("Dish", dishSchema);
