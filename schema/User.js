const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = Location = mongoose.model("user", UserSchema);
