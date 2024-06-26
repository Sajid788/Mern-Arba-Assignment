const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
//   avatar: String
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };



