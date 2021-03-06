const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");
const passport = require("passport");


router.route("/find/name/:username")
  .get(userControllers.findUserByName)

router.route("/login/local")
  .post(passport.authenticate('local'), function(req, res){
    // console.log(req);
    // console.log("login")
    res.redirect("/api/user/in");
});

router.route("/logout")
  .get(function(req, res){
    req.logout();
    res.json({message: 'out'});
});

router.route("/in")
  .get(function(req, res){
  //  console.log("new guy in the system")

router.route("/new")
  .post(userControllers.newUser)
  
  let response = {
    username: req.user.username ? req.user.username : false,
    display: "hidden"
  }

   response.username ? res.json(response) : res.json(false)
 });

module.exports = router;