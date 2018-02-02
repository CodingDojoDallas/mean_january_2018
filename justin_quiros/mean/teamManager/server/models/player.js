// require mongoose
var mongoose = require('mongoose');


// create the schema
var PlayerSchema = new mongoose.Schema({
 	name: {
 		type: String,
 		required: [true, "First name is required"],
 		minlength: 3,
 		maxlength: 320
 	},
 	position: {
 		type: String,
 	},

 	// HAVE TO CHANGE GAME TO ARRAY OF STRINGS ['GREEN', 'YELLOW', 'RED']
 	game1: {
 		type: [],
 		default: ['', '', 'yellow']
 	},
 	game2: {
 		type: [],
 		default: ['', '', 'yellow']
 	},
 	game3: {
 		type: [],
 		default: ['', '', 'yellow']
 	}

}, { timestamps: true });

module.exports = mongoose.model('Player', PlayerSchema);