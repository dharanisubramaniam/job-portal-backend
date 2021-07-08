const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

const mongooseDB = require("./config/db");

//connect db
mongooseDB();

app.use(express.json({ extended: false }));

app.use("/api/jobs", require("./api/job"));
app.use("/api/category", require("./api/category"));

const PORT = process.env.PORT || 5001;
app.get("/", (req, res) => {
  res.json("API Running");
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
