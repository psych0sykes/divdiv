const db = require("../models");


module.exports = {
        findAll: function(req, res) {
          console.log("findAll: " + req.params)
        db.Div
          .find({})
          .select(["_id", "rgb_color", "canvas_id"])
          .then(dbModel => {
            return res.json(dbModel)
          })
          .catch(err => res.status(422).json(err));
      },
        newDiv: function(req, res) {
          console.log(req.body);
        db.Div
          .create(req.body)
          .then(createdDiv => res.json(createdDiv))
          .catch(err => res.status(422).json(err));
      },
        findCanvas: function(req, res) {
          console.log(req.params.id);
          let fields = ["_id", "rgb_color", "canvas_id", "donation_amount"]

        db.Div
          .find({canvas_id: req.params.id})
          .select(fields)
          .then(dbCanvas => {
            // console.log("canvas: " + dbCanvas)
            return res.json(dbCanvas)
          })
          .catch(err => res.status(422).json(err));
          
      },
        findCanvasByUser: function(req, res) {
          console.log(req.params.id);
          let fields = ["_id", "rgb_color", "canvas_id"]

        db.Div
          .find({username: req.params.id})
          .select(fields)
          .then(dbCanvas => {
            // console.log("canvas: " + dbCanvas)
            return res.json(dbCanvas)
          })
          .catch(err => res.status(422).json(err));
          
      },
      findDivById: function(req, res) {
        console.log(req.params.id);
        let fields = ["_id", "rgb_color", "canvas_id"]

      db.Div
        .findOne({_id: req.params.id})
        // .select(fields)
        .then(dbDiv => {
          // console.log("canvas: " + dbDiv)
          return res.json(dbDiv)
        })
        .catch(err => res.status(422).json(err));
        
    },
        test: function(req, res) {
        res.json({message: "this is a test and you PASSED!"})
      }
};