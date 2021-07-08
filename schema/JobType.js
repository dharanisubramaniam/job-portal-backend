const mongoose = require("mongoose");

const JobTypeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  id: {
    type: Number,
  }
});

module.exports = JobType = mongoose.model("jobType", JobTypeSchema);
