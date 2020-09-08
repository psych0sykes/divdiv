const db = require("../models");

module.exports = {
    newUser: function (req, res) {

    const u = req.body;

    const createUser = {
        username: u.username,
        email: u.email,
        first_name: u.first_name,
        last_name: u.last_name,
        created: u.created,
        password: db.User.generateHash(u.password)
    };

    db.User
        .create(createUser)
        .then(newUser => res.json(newUser))
        .catch(err => res.status(422).json(err));

    },
    findUserByName: function (req, res) {
        db.User
            .findOne({username: req.params.username})
            .then(user => {
                const resUser = {
                    username: user.username,
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    created: user.created,
                };

                return res.json(resUser)
            })
            .catch(err => res.status(422).json(err));
    }
}



