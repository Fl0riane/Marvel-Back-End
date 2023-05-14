const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: { type: String, unique: true },
  account: {
    username: { type: String, required: true },
    firstname: { type: String, required: true },
  },
  token: String,
  hash: String,
  salt: String,
});
module.exports = User;
