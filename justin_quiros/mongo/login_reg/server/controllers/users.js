var session = require('express-session');
var User = require('../models/user.js');

var flash_errors = (req, errors) =>{
  for(let error in errors) {
    req.flash('errors', errors[error])
  }
}
module.exports = {
    index: (req, res) => {
      res.render("index", {errors: req.flash('errors')});
    },
    show: (req, res) => {
        User.findOne({ _id: req.params.id }, (err, user) => {
            if (err) {
                console.log(err.message);
            }
            return res.render('users_show', { user: user })
        });
    },
    create: (req, res) => {
      let user = new User(req.body);

      user.save((err) => {
        if(err){
          flash_errors(req, err.errors);
          return res.redirect('/')
        } 
        session.user_id = user._id;
        return res.redirect(`/users/${session.user_id}`);
      })
    }
  }
