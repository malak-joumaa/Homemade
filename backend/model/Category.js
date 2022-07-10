const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  created_by: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
});

module.exports = mongoose.model("Category", categorySchema);
