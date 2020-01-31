const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  created: { type: Date, default: Date.now }

});

const Div = mongoose.model("Div", userSchema);

module.exports = User;