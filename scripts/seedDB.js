const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/divdiv"
);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function createDivs(number, campId, canvId, campName, array) {

    for (var i = 0; i < number; i++){
        let newDiv = {
          rgb_color: getRandomColor(),
          username: "test" + i,
          donation_amount: Math.floor(Math.random() * 100),
          campaign_name: campName,
          campaign_id: campId,
          canvas_id: canvId,
          message: "This is test number: " + i
        }
        array.push(newDiv);
    }
    return console.log("<===== created " + number + " new divs to canvas " + canvId + " ======>")
}

const divSeed = []

createDivs(333, "69", "69", "333 divs", divSeed);
createDivs(2500, "6969", "6969", "2500 divs", divSeed);
createDivs(150, "696969", "696969","150 divs", divSeed);

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
