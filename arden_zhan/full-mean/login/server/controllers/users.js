var session = require('express-session');
    User    = require('../models/user');

module.exports = {
    index: (req, res) => {
        User.find({}, null, {sort: '-createdAt'}, (err, users) => {
            if (err) { return res.json(err); }
            return res.json(users);
        });
    },

    create: (req, res) => {
        let newUser = new User(req.body);

        User.findOne({name: newUser.name}, (err, user) => {
            if (user) { 
                session.user_id = user._id;
                return res.json(user);
            }

            newUser.save( (err) => {
                if (err) { return res.status(400).json(err.json()); }
                session.user_id = newUser._id;
                return res.json(newUser);
            });
        });
    }
};
