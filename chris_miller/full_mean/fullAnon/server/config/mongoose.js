var mongoose = require("mongoose"),
	db_name  = "anon_posts";

mongoose.connect(`mongodb://localhost/${db_name}`);