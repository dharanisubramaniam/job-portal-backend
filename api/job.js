const express = require("express");

const Job = require("../schema/Job");

const router = express.Router();
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    console.log("Entering Jobs POST");
    const allJobs = await Job.find().sort("id");
    allJobs.reverse();
    // console.log(allJobs);
    let maxId = allJobs.length > 0 ? allJobs[0].id : 0;
    // console.log(maxId);
    const newJob = new Job({
      category_ids: req.body.category_ids,
      id: maxId + 1,
      designation: req.body.designation,
      company_id: req.body.company_id,
      location_ids: req.body.location_ids,
      job_type_ids: req.body.job_type_ids,
      salary: req.body.salary,
      min_experience: req.body.min_experience,
      max_experience: req.body.max_experience,
      job_link: req.body.job_link,
    });
    const job = await newJob.save();
    res.json(job);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const job = await Job.find({});
    let perPage = req.header("perPage") ? req.header("perPage") : 10;
    const pageNumber = req.header("pageNumber") ? req.header("pageNumber") : 1;

    let paginatedJobs = job.slice(
      (pageNumber - 1) * perPage,
      perPage * pageNumber
    );
    let jobResponse = {
      data: paginatedJobs,
      metaData: {
        perPage: Number(perPage),
        pageNumber: Number(pageNumber),
        total: job.length,
      },
    };
    res.json(jobResponse);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});
module.exports = router;
