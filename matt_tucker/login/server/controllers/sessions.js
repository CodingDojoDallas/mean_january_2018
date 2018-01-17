var session     = require('express-session');
var User        = require('../models/users.js');
var bcrypt      = require('bcrypt-as-promised');

var flash_errors = (req, errors) => {
    for (let error in errors) {
        req.flash('errors', errors[error]);
    }
}

module.exports = {
    new: (req, res) => {

        return res.render('sessions/new', { 'errors': req.flash('errors') });
    },
    create: (req, res) => {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (! user) {
                let error = [{message: 'Account not registered.'}];

                flash_errors(req, error);

                return res.redirect('/sessions/new');
            }

            // user.authenticate(req.body.password)

            bcrypt.compare(req.body.password, user.password)
            .then( () => {

                session.user_id = user._id;

                return res.redirect(`/users/${user._id}`);
            })
            .catch( () => {
                let error = [{message: 'Invalid Password'}];

                flash_errors(req, error);

                return res.redirect('/sessions/new');
            });
        });
    },
    delete: (req, res) => {
        if ('user_id' in session) {
            delete session['user_id'];

            return res.redirect('/sessions/new');
        }

        return res.redirect('/users/new');
    }
}