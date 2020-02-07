const db = require("../models");

module.exports = {
    newUser: function (req, res) {
    db.User
        .create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.status(422).json(err));

    },
    findUserByName: function (req, res) {
        db.User
            .findOne({username: req.params.username})
            .then(user => {
                return res.json(user)
            })
            .catch(err => res.status(422).json(err));
    }
}




