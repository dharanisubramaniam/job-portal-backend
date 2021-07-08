const express = require("express");

const router = express.Router();

const Category = require("../schema/Category");

router.get("/", async (req, res) => {
  try {
    const category = await Category.find({});
    res.json(category);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newCategory = new Category({
      category: req.body.category,
      category_id: req.body.category_id,
    });
    const category = await newCategory.save();
    res.json(category);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
