const mongoose = require("mongoose");

const config = require("config");

const db = config.get("dbURI");

const mongooseDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("server connected successfully");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = mongooseDB;
