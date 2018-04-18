const session = require('express-session');
const User    = require('../models/user.js');

module.exports = {
  create: (req, res) => {
    let user = new User(req.body);

    user.save( err => {
      if (err) {
        console.log(err);
        return res.redirect('/');
      }
      session.user_id = user._id;
      return res.redirect(`/users/${user._id}`);
    });
    
  },

  retrieveOne: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        console.log(err);
      }
      if (req.params.id == session.user_id){
        return res.render('users/users-show', { user: user})
      }
      else return res.redirect('/users')
    });
  },

  retrieveAll: (req, res) => {
    User.find({}, (err, users) => {
      return res.render('users/users-list', {users: users, errors: err});
    })
  }
}