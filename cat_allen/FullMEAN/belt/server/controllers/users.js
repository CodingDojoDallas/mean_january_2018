var session = require('express-session'),
	User	= require('../models/user');


module.exports = {
	create: (req, res) => {
		let newUser = new User(req.body);
		User.findOne({name: newUser.name}, (err, user) =>{
			if (user) {
				session.user_id = user._id;
				return res.json(user);
			}
			newUser.save( (err) => {
				if (err) {
					return res.json(err.json());
				}
				session.user_id = newUser._id;
				return res.json(newUser);
			});
		});
	}
}