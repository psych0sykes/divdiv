const db = require("../models");


module.exports = {
        findAll: function(req, res) {
          console.log("findAll: " + req.params)
        db.Canvas
          .find({})
          .select()
          .then(canvas => {
            return res.json(canvas)
          })
          .catch(err => res.status(422).json(err));
      },
        newCanvas: function(req, res) {

          console.log(req.body)

        db.Canvas
          .create(req.body)
          .then(newCanvas => res.json(newCanvas))
          .catch(err => res.status(422).json(err));
      },
        findCanvas: function(req, res) {
          console.log(req.params.id);
        //   let fields = ["_id", "rgb_color", "canvas_id"]

        db.Canvas
          .find({canvas_id: req.params.id})
          .select()
          .then(dbCanvas => {
            // console.log("canvas: " + dbCanvas)
            return res.json(dbCanvas)
          })
          .catch(err => res.status(422).json(err));
          
      },
        test: function(req, res) {
        res.json({message: "this is a test and you PASSED!"})
      }
};