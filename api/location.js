const express = require("express");

const router = express.Router();

const Location = require("../schema/Location");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  try {
    const location = await Location.find({});
    res.json(location);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const allLocation = await Location.find().sort("id");
    allLocation.reverse();
    // console.log(allLocation);
    let maxId = allLocation.length > 0 ? allLocation[0].id : 0;
    // console.log(maxId);
    const newLocation = new Location({
      name: req.body.name,
      id: maxId + 1,
    });
    const location = await newLocation.save();
    res.json(location);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
