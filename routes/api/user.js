const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");
const passport = require("passport");


router.route("/login/local")
  .post(passport.authenticate('local'), function(req, res){
    // console.log(req);
    // console.log("login")
    res.redirect("/api/user/in");
});

router.route("/logout")
  .get(function(req, res){
    req.logout();
    res.redirect('/api/user/out');
});

router.route("/in")
 .get(function(req, res){
  //  console.log("new guy in the system")
  let response = {
    username: req.user.username,
    display: "hidden"
  }

   res.json(response)
  //  .catch(err => res.status(422).json(err));
 });

router.route("/out")
 .get(function(req, res){
   console.log("out");
 })

module.exports = router;