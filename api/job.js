const express = require("express");

const Job = require("../schema/Job");

const router = express.Router();
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    // console.log("Entering Jobs POST", req);
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
      last_updated: new Date(),
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
    // console.log(req.query, "id:", req.query.id, "tag:", req.query.tag);

    let job;
    let jobResponse;
    let value = req.query.id;
    if (!req.query.tag) {
      job = await Job.find({}).sort({ last_updated: -1 });
    }

    if (req.query.tag != {}) {
      if (req.query.tag === "id") {
        job = await Job.find({
          id: value,
        }).sort({ last_updated: -1 });
      }

      if (req.query.tag === "category_ids") {
        console.log("inside category_ids");
        job = await Job.find({
          category_ids: value,
        }).sort({ last_updated: -1 });
      }
    }

    //.sort({ last_updated: -1 });
    // console.log(job.length, "im inside job get categoryid");

    if (req.header) {
      let perPage = req.header("perPage") ? req.header("perPage") : 10;
      const pageNumber = req.header("pageNumber")
        ? req.header("pageNumber")
        : 1;

      let paginatedJobs = job.slice(
        (pageNumber - 1) * perPage,
        perPage * pageNumber
      );
      jobResponse = {
        data: paginatedJobs,
        metaData: {
          perPage: Number(perPage),
          pageNumber: Number(pageNumber),
          total: job.length,
        },
      };
    }
    const finalJob = jobResponse ? jobResponse : job;
    res.json(finalJob);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
