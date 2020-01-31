const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const canvasSchema = new Schema({
  
});

const Div = mongoose.model("Div", canvasSchema);

module.exports = Canvas;