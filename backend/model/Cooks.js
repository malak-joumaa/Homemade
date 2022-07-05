const mongoose = require("mongoose");

const cookSchema = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
    min: 6,
    max: 50,
  },
  opening_hours: [
    {
      type: String,
    },
  ],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
});

cookSchema.set("timestamps", true);

module.exports = mongoose.model("cook", cookSchema);
