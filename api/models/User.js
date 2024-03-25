const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true, min: 4, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
