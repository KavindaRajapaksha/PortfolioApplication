const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  massage: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
