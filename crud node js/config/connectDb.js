const mongoose = require("mongoose");

// Load env variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

async function connectDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected");
  } catch (err) {
    console.log(`mongDb ${err}`);
  }
}

module.exports = connectDb;
