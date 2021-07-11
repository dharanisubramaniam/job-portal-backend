const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  id: {
    type: Number,
  },
  logo_url: {
    type: String,
  },
});

module.exports = Company = mongoose.model("company", CompanySchema);
