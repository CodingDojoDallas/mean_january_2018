var session = require('express-session');
var User = require('../models/users.js');

var flash_errors = (req, errors) => {
    for (let error in errors) {
        req.flash('errors', errors[error]);
    }
}

module.exports = {
    index: (req, res) => {

        User.find({}, (err, users) => {
            return res.render('users/index', { users: users, errors: err });
        });
    },
    new: (req, res) => {

        return res.render('users/new', { errors: req.flash('errors') });
    },
    create: (req, res) => {
        let user = new User(req.body);

        user.save( (err) => {
            if (err) {
                flash_errors(req, err.errors);
            
                return res.redirect('/users/new');
            }

            session.user_id = user._id;

            return res.redirect(`/users/${user._id}`);
        });
    },
    show: (req, res) => {
        User.findOne({ _id: req.params.id }, (err, user) => {
            if (err) {
                console.log(err.message);
            }

            return res.render('users/show', { user: user })
        });
    }
}