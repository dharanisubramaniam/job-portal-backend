const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  category_id: {
    type: Number,
  },
  category: {
    type: String,
  },
  id: {
    type: Number,
  },
  designation: {
    type: String,
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  jobType: {
    type: String,
  },
  salary: {
    type: Number,
  },
  experience: {
    type: String,
  },
  jobLink: {
    type: String,
  },
  logo: {
    type: String,
  },
});

module.exports = Job = mongoose.model("job", JobSchema);
