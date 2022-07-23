const mongoose = require("mongoose");
const dishSchema = require("./Dish").schema;

const menuSchema = new mongoose.Schema({
  cook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cook",
  },
  dishes: [dishSchema],
});

module.exports = mongoose.model("Menu", menuSchema);
