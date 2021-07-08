const express = require("express");

const router = express.Router();

const Company = require("../schema/Company");

router.get("/", async (req, res) => {
  try {
    const company = await Company.find({});
    res.json(company);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

router.post("/", async (req, res) => {
  try {
    const allCompanies = await Company.find().sort('id');
    allCompanies.reverse();
    console.log(allCompanies);
    let maxId = allCompanies.length > 0 ? allCompanies[0].id : 0;    
    console.log(maxId);
    const newCompany = new Company({
      name: req.body.name,
      logo: req.body.logo,
      id: maxId+1,
    });
    const company = await newCompany.save();
    res.json(company);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;