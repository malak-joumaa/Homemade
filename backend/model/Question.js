const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    minLenght: 3,
  },
  dish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dish",
  },
  question_type: {
    type: String,
  },
  choices: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Question", questionSchema);
