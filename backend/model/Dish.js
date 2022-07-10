const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    min: 6,
    max: 500,
  },
  price: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

module.exports = mongoose.model("Dish", dishSchema);
