var mongoose 	= require('mongoose'),
	fs 			= require('fs'),
	path 		= require('path'),
	db_name 	= 'restfulTask',
	models_path = path.join(__dirname, './../models');

mongoose.connect(`mongodb://localhost/${db_name}`);

