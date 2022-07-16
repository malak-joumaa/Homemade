const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  dish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dish",
  },
  question_type: {
    type: String,
    required: true,
  },
  choices: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Question", questionSchema);
