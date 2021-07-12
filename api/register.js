const express = require("express");
const router = express.Router();
const User = require("../schema/User");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");

router.post(
  "/",
  check("name").notEmpty().withMessage("UserName is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Please enter a password with 6 or more characters"),

  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors.array());
    if (!errors.isEmpty()) {
      return res.status("400").json({ errors: errors.array() });
    }

    const { name, password } = req.body;
    try {
      let user = await User.findOne({ name });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      const allUsers = await User.find().sort("id");
      //   console.log(allUsers, "allUsers");
      allUsers.reverse();
      let maxId = allUsers.length > 0 ? allUsers[0].id : 0;
      //   console.log(maxId, "maxId");
      user = new User({
        name,
        id: maxId + 1,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      const userSaved = await user.save();
      res.json(userSaved);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
