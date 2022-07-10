const mongoose = require("mongoose");

const choiceSchema = new mongoose.Schema({
  choice: {
    type: String,
    required: true,
    minLenght: 1,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
  dish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dish",
  },
});

module.exports = mongoose.model("Answer_choice", choiceSchema);
