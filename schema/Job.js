const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  category_ids: [
    {
      type: Number,
    },
  ],
  id: {
    type: Number,
  },
  designation: {
    type: String,
  },
  company_id: {
    type: Number,
  },

  location_ids: [
    {
      type: Number,
    },
  ],
  job_type_ids: [
    {
      type: Number,
    },
  ],
  salary: {
    type: String,
  },
  min_experience: {
    type: Number,
  },
  max_experience: {
    type: Number,
  },
  job_link: {
    type: String,
  },
  last_updated: {
    type: Date,
  },
});

module.exports = Job = mongoose.model("job", JobSchema);
