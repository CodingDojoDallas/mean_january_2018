var mongoose = require('mongoose');

module.exports = mongoose.model('Dude', new mongoose.Schema({

	name: {
		type: String,
		required: [true, "Name is required"]
	}
}, {timestamps: true}));