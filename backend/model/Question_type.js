const mongoose = require("mongoose");

const questionTypeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    minLenght: 3,
  },
});

module.exports = mongoose.model("Question_Type", questionTypeSchema);
