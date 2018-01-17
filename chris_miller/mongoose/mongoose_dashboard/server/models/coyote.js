var mongoose = require('mongoose');

module.exports = mongoose.model('Coyote', new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required."]
	},
	color: {
		type: String,
		required: [true, "Color is required."]
	},
	kids: {
		type: Array,
		default: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Kid'
		}]
	}
}, {timestamps: true}));