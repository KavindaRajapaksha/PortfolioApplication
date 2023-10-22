const express = require("express");

let Client = require("../models/Client");

const router = express.Router();

router.route("/add").post((req, res) => {
  const { fullName, email, age, subject, message } = req.body;

  const newClient = new Client({
    fullName,
    email,
    age,
    subject,
    message,
  });

  newClient
    .save()
    .then(() => {
      res.status(200).json("New client added");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error: " + err);
    });
});
router.route("/").get((req, res) => {
  Client.find()
    .then((clients) => {
      res.json(clients);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error: " + err);
    });
});
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { fullName, email, age, subject, message } = req.body;
  const updateClient = {
    fullName,
    email,
    age,
    subject,
    message,
  };

  const update = await Client.findByIdAndUpdate(userId, updateClient)
    .then(() => {
      res.status(200).send({ status: "User updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Client.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  Client.findById(userId)
    .then((client) => {
      res.status(200).send({ status: "User finded", client });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
