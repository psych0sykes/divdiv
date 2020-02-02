const db = require("../models");

module.exports = {
    newUser: function (req, res) {
    db.User
        .create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.status(422).json(err));

    }
}




