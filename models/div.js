const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const divSchema = new Schema({
  rgb_color: { type: String, required: true },
  username: { type: String, required: true },
  donation_amount: {type: Number, required: false},
  created: { type: Date, default: Date.now },
  canvas_title: String,
  canvas_id: {type: String, required: true},
  message: String
});

const Div = mongoose.model("Div", divSchema);

module.exports = Div;