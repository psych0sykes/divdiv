const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");
const passport = require("passport");


router.route("/login/local")
  .post(passport.authenticate('local'), function(req, res){
    // console.log(req);
    // console.log("login")
    res.redirect("/api/user");
})

router.route("/")
 .get(function(req, res){
  //  console.log("new guy in the system")
   res.json(req.user.username)
 });

module.exports = router;