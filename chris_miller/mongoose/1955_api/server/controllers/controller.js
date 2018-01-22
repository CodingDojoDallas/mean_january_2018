var Dude = require('../models/dude_model');

module.exports = {
	index: (req, res) => {
		console.log("hello")
		Dude.find({}, (err, dudes) => {
		if (err) {
			console.log(err);
		}
		
		res.json({'dudes': dudes});
	});
	},
	create: (req, res) => {
		let dude = new Dude({name: req.params.name});

		dude.save((err) => {
			if (err) {
				console.log(err);
			}

			res.redirect('/');
		})
	},
	show: (req, res) => {
		dude = Dude.find({name: req.params.name}, (err, dude) => {
			if (err) {
				console.log(err);
			}

			res.json(dude);
		});
	},
	destroy: (req, res) => {
		dude = Dude.remove({name: req.params.name}, (err, dude) => {
		res.redirect('/');
		})
	}	
}