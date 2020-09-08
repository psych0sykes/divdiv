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

// const userSchema = new Schema({
//     username: {type: String, required: true},
//     password: {type: String, required: true},
//     email: {type: String, required: true},
//     first_name: {type: String},
//     last_name: {type: String},
//     created: { type: Date, default: Date.now }
  
//   });



