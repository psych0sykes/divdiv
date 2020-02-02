const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/divdiv"
);

const divSeed = [];
const userSeed = [];
const canvasSeed = [];

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function createSeed(number, campId, canvId, canvTitle) {

    let donationTotal = 0
    let supportTotal = 0

    for (var i = 0; i < number; i++){
        let newUser = {
          username: "test" + i,
          password: "password"
        }
        userSeed.push(newUser);
    };

    for (var i = 0; i < number; i++){
        let newDiv = {
          rgb_color: getRandomColor(),
          username: "test" + i,
          donation_amount: Math.floor(Math.random() * 100),
          canvas_title: canvTitle,
          canvas_id: canvId,
          message: "This is test number: " + i
        }
        donationTotal = donationTotal + newDiv.donation_amount;
        supportTotal++;

        divSeed.push(newDiv);
    };

    let newCanvas = {
      canvas_id: canvId,
      owner: "test1",
      canvas_title: canvTitle,
      bio: "this is a test canvas",
      donation_total: donationTotal,
      support_total: supportTotal
    };
    canvasSeed.push(newCanvas);

    return
}

createSeed(333, "69", "69", "333 divs");
createSeed(2500, "6969", "6969", "2500 divs");
createSeed(150, "696969", "696969","150 divs");

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

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Canvas
  .remove({})
  .then(() => db.Canvas.collection.insertMany(canvasSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });