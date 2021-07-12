const express = require("express");

const router = express.Router();

const Category = require("../schema/Category");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  try {
    const category = await Category.find({});
    res.json(category);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const allCategories = await Category.find().sort("id");
    allCategories.reverse();
    // console.log(allCategories);
    let maxId = allCategories.length > 0 ? allCategories[0].id : 0;
    // console.log(maxId);
    const newCategory = new Category({
      name: req.body.name,
      id: maxId + 1,
    });
    const category = await newCategory.save();
    res.json(category);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
