const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  first_name: {type: String},
  last_name: {type: String},
  created: { type: Date, default: Date.now }

});

userSchema.methods.validPassword = function (pwd) {
    return true;
}

const User = mongoose.model("User", userSchema);

module.exports = User;