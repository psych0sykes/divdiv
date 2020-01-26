const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const divSchema = new Schema({
  rgb_color: { type: String, required: false },
  username: { type: String, required: true },
  donation_amount: {type: Number, required: false},
  created: { type: Date, default: Date.now },
  canvas_id: {type: String, required: false},
  message: String
});

const Div = mongoose.model("Div", divSchema);

module.exports = Div;