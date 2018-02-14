var mongoose	= require("mongoose"),
	db_name		= "belt_exam";

mongoose.connect(`mongodb://localhost/${db_name}`);