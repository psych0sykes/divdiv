const db = require("../models");
const passport = require('passport')

module.exports = {

    login: function(){
        passport.authenticate('local'), function(req, res){
            res.redirect("/");
        }
    },

    test: function(req, res){
        res.json({message: "you got it"})
    }
}



