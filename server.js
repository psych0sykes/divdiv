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

const stripe = require('stripe')('sk_test_0tS3rAobuOiAbun1KCzvcpG800z4PZg751');

app.post("/api/create-payment-intent", async (req, res) => {
  console.log("create payment intent is working...")
  // const { items, currency } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: "usd"
  });

  // Send publishable key and PaymentIntent details to client
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    clientSecret: paymentIntent.client_secret
  });
});

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
