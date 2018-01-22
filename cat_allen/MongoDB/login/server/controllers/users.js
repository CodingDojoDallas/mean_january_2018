module.exports = {

	new: (req, res) => {
	return res.render('users/new', { errors: req.flash('errors') });
	},


	create: (req, res) => {
		let user = new User(req.body);
		user.save( (err) => {
			if(err) {
				flash_errors(req, err.errors)
				return res.redirect('/users/new');
			}
			session.user_id = user._id;
			//string interpolation - taking the user we juse saved to the db and putting its id inside the URL to immediately go to the show page.
			return res.redirect(`/users/${user._id}`);
		});
	},
	show: (req, res) => {
		User.findOne({ _id: req.params.id }, (err, user) =>
			if (err){
				console.log(err.message);
			}
			return res.render('users/show', { user: user })
		});
	}
}