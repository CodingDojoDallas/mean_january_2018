var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required.'],
		minlength: [3, 'Minimum of 3 characters.']
	}
}, {timestamps: true });

var User = mongoose.model ('User', UserSchema);
module.exports = User;