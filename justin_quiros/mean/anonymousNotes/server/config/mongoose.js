var mongoose = require('mongoose'),
	db_name = "note_app";

mongoose.connect(`mongodb://localhost/${db_name}`);