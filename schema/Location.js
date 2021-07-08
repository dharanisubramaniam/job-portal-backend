const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  id: {
    type: Number,
  }
});

module.exports = Location = mongoose.model("location", LocationSchema);
