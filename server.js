const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var bodyParser = require('body-parser');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const db = require("./models");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.json());

app.use(express.static("public"));
app.use(session({ secret: "i got divs all around me" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/',})
);

app.use(routes);


// Send every request to the React app
// Define any API routes before this runs

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/divdiv");

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// See that DB ===========================================================================

function SeedDB() {
  
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
  
  function createSeed(number, canvId, canvTitle) {
  
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
  
  createSeed(333, "5e362edd02a34659ea1dc487", "333 divs");
  createSeed(2500, "5e362edd02a34659ea1dc488", "2500 divs");
  createSeed(150, "5e362edd02a34659ea1dc489","150 divs");
  
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
  
  // db.Canvas
  //   .remove({})
  //   .then(() => db.Canvas.collection.insertMany(canvasSeed))
  //   .then(data => {
  //     console.log(data.result.n + " records inserted!");
  //     process.exit(0);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     process.exit(1);
  //   });
  
  };

  SeedDB();
