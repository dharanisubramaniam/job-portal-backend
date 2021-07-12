const express = require("express");

const router = express.Router();

const JobType = require("../schema/JobType");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  try {
    const jobType = await JobType.find({});
    res.json(jobType);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const allJobType = await JobType.find().sort("id");
    allJobType.reverse();
    // console.log(allJobType);
    let maxId = allJobType.length > 0 ? allJobType[0].id : 0;
    // console.log(maxId);
    const newJobType = new JobType({
      name: req.body.name,
      id: maxId + 1,
    });
    const jobType = await newJobType.save();
    res.json(jobType);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
