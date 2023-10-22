const express = require("express");
let Admin = require("../models/Admin");
const router = express.Router();

router.route("/add").post(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newAdmin = new Admin({
    firstName,
    lastName,
    email,
    password,
  });

  newAdmin
    .save()
    .then(() => {
      res.status(200).json("New Admin added");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error: " + err);
    });
});

router.route("/").get((req,res) => {

    Admin.find().then((admin)=>{
        res.json(admin);
    }).catch((err)=>{
        console.log(err);
        res.status(400).json("Error: "+err);
    })
});

module.exports = router;
