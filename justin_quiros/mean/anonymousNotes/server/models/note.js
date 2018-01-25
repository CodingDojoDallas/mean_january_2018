// require mongoose
var mongoose = require('mongoose');


// create the schema
var NoteSchema = new mongoose.Schema({
 	content: {
 		type: String,
 		required: [true, "First name is required"],
 		minlength: 3,
 		maxlength: 320
 	}
 	
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);