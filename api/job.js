const express = require("express");

const Job = require("../schema/Job");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newJob = new Job({
      category_id: req.body.category_id,
      category: req.body.category,
      designation: req.body.designation,
      company: req.body.company,
      location: req.body.location,
      jobType: req.body.jobType,
      salary: req.body.salary,
      experience: req.body.experience,
      jobLink: req.body.jobLink,
      logo: req.body.logo,
    });
    console.log(newJob._id);
    // const conditions = { _id: newJob._id },
    //   update = { $inc: { count: 1 } };
    const _job = await Job.findByIdAndUpdate(res._id, {
      $inc: { count: 1 },
    });
    console.log(_job);
    const job = await newJob.save();
    // console.log(job, "2");
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
