const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  id: {
    type: Number
  },
  password: {
      type: String
  }
});

module.exports = Location = mongoose.model("user", UserSchema);
