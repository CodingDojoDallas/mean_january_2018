var mongoose = require('mongoose');

module.exports = mongoose.model('Kid', new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required."]
	},
	color: {
		type: String,
		required: [true, "Color is required."]
	},
	coyote: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Coyote'
	}
}, {timestamps: true}));