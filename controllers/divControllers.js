const db = require("../models");

module.exports = {
        findAll: function(req, res) {
        db.Div
          .find(req.query)
          .sort({ created: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
        newDiv: function(req, res) {
        db.Div
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}