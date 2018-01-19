var Coyote = require('../models/coyote');

module.exports = {
	index: (req, res) => {
		console.log("hello")
		Coyote.find({}, (err, coyotes) => {
		if (err) {
			console.log(err);
		}
		
		return res.render('index', {'coyotes': coyotes});
	});
	},
	new: (req, res) => {
		return res.render('new');
	},
	create: (req, res) => {
		let coyote = new Coyote(req.body);

		coyote.save((err) => {
			if (err) {
				console.log(err);

				return res.redirect('/coyotes/new');
			}

			return res.redirect('/');
		})
	},
	show: (req, res) => {
		Coyote.findOne({_id: req.params.id}, (err, coyote) => {
			if (err) {
				console.log(err);
			}

			return res.render('show', {coyote: coyote});
		});

	}
}