const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/divdiv"
);

const divSeed = [
  {
    username: "test1",
    donation_amount: 100,
    rgb_color: "ff0000",
    canvas_id: "69",
    message: "damn"
  },
  {
    username: "test2",
    donation_amount: 150,
    rgb_color: "00ff00",
    canvas_id: "69",
    message: "wow"
  },
  {
    username: "test3",
    donation_amount: 50,
    rgb_color: "0000ff",
    canvas_id: "69",
    message: "who?"
  },
  {
    username: "test4",
    donation_amount: 120,
    rgb_color: "ffff00",
    canvas_id: "69",
    message: "ah"
  }
];

db.Div
  .remove({})
  .then(() => db.Div.collection.insertMany(divSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
