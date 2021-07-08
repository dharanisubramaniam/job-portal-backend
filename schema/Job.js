const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  category_id: {
    type: Number,
  },
  id: {
    type: Number
  },
  designation: {
    type: String,
  },
  company_id: {
    type: Number,
  },
  location_id: {
    type: Number,
  },
  job_type_id: {
    type: Number,
  },
  salary: {
    type: Number,
  },
  min_experience: {
    type: Number,
  },
  max_experience: {
    type: Number,
  },
  job_link: {
    type: String,
  }
});

module.exports = Job = mongoose.model("job", JobSchema);
