const db = require("../models");


module.exports = {
        findAll: function(req, res) {
          console.log("findAll: " + req.params)
        db.Div
          .find({})
          .then(dbModel => {
            return res.json(dbModel)
          })
          .catch(err => res.status(422).json(err));
      },
        newDiv: function(req, res) {
        db.Div
          .create(req.body)
          .then(createdDiv => res.json(createdDiv))
          .catch(err => res.status(422).json(err));
      },
        findCanvas: function(req, res) {
          console.log(req.params.id);
      },
        test: function(req, res) {
        res.json({message: "this is a test and you PASSED!"})
      }
};