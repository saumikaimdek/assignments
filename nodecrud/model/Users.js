const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  password: String,
  gender: String,
  birthdate: String,
  age: Number,
  country: String
});

module.exports = mongoose.model("Users", usersSchema);