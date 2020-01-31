const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");
const passport = require("passport");


router.route("/login/local")
  .post(passport.authenticate('local'), function(req, res){
    res.redirect("/api/user");
})

router.route("/")
 .get(function(req, res){
   res.json(req.user.username)
 });

module.exports = router;