const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (e) {
    console.log("Error connecting to database", e);
  }
};

module.exports = connectDB;
