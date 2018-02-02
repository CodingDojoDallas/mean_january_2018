var Player 	= require('../models/player') 

module.exports = {
	index: (req, res) => {
		Player.find({}, (err, players) => {
			if (err) {
				return res.json(err);
			}

			return res.json(players);
		});
	},
	create: (req, res) => {
		const player = new Player(req.body);

		player.save( (err) => {
			if (err) {
				return res.json(err);
			}

			return res.json(player);
		})
	},
	update: (req, res) => {
		console.log(req.body._id);
		console.log(req.body);

		Player.update({_id: req.body._id}, req.body, (err, player) => {
			if (err) {
				return res.json(err);
			}

			return res.json(player)
		})
	},

	delete: (req, res) => {
		console.log(req.body, 'in the delete function');
		console.log(req.params.id);
		Player.remove({_id: req.params.id}, (err, player) => {
			if (err) {
				console.log('there was an error');
				return res.json(err);
			}
			console.log('We made it!');

			return res.json(player)
		})
	}
}