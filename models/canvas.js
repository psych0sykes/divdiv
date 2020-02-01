const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const canvasSchema = new Schema({
    canvas_id: {type: String, required: true},
    owner: {type: String, required: true},
    canvas_title: {type: String, required: true},
    bio: {type: String},
    donation_total: {type: Number},
    support_total: {type: Number},
    
});

const Canvas = mongoose.model("Canvas", canvasSchema);

module.exports = Canvas;