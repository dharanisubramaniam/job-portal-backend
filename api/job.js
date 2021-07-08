const express = require("express");

const Job = require("../schema/Job");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newJob = new Job({
      category_id: req.body.category_id,
      category: req.body.category,
      id: req.body.id,
      designation: req.body.designation,
      company: req.body.company,
      location: req.body.location,
      jobType: req.body.jobType,
      salary: req.body.salary,
      experience: req.body.experience,
      jobLink: req.body.jobLink,
      logo: req.body.logo,
    });
    const job = await newJob.save();
    res.json(job);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const job = await Job.find({});
    res.json(job);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});
module.exports = router;
