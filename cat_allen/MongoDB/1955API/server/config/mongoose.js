var mongoose 	= require('mongoose'),
	fs 			= require('fs'),
	path 		= require('path'),
	db_name 	= '1955',
	models_path = path.join(__dirname, './../models');

mongoose.connect(`mongodb://localhost/${db_name}`);

