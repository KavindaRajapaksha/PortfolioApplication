const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const URL =
  "mongodb+srv://KavindaRajapaksha:X2z7pku9wIYihAzR@cluster0.xihfyjd.mongodb.net/Portfolio_DB";
const ConnectMongoDB = (URL) => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(URL);
    console.log("Successfully Connected to MongoDB");
  } catch (err) {
    console.log("MongoDB Connection Failed");
  }
};
ConnectMongoDB(URL);

app.listen(PORT, () => {
  console.log(`SERVER IS UP AND RUNNING ON PORT ${PORT}`);
});
