const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
  },
  category_id: {
    type: Number,
  },
});

module.exports = Category = mongoose.model("category", CategorySchema);
