const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  id: {
    type: Number,
  },
});

module.exports = Category = mongoose.model("category", CategorySchema);
