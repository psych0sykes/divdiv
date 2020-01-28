const db = require("../models");


module.exports = {
        findAll: function(req, res) {
          console.log(req.params)
          console.log(db.Div.collection)
        db.Div
          .find({})
          .then(dbModel => {
            console.log(dbModel)
            return res.json(dbModel)
          })
          .catch(err => res.status(422).json(err));
      },
        newDiv: function(req, res) {
          console.log("adding new div...");
          console.log(req.body);
        db.Div
          .create(req.body)
          .then(createdDiv => res.json(createdDiv))
          .catch(err => res.status(422).json(err));
      },
        test: function(req, res) {
        res.json({message: "this is a test and you PASSED!"})
      }
};