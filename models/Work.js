const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const WorkSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Work = mongoose.model("Work", WorkSchema);
