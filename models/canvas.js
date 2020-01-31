const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const canvasSchema = new Schema({
    canvas_id: {type: String, required: true},
    campaign_id: {type: String, required: true},
    username: {type: String, required: true}
});

const Canvas = mongoose.model("Canvas", canvasSchema);

module.exports = Canvas;