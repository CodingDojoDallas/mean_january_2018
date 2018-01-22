var mongoose 	= require('mongoose'),
	// fs 			= require('fs'),
	path 		= require('path'),
	db_name 	= 'dashboard',
	models_path = path.join(__dirname, './../models');

mongoose.connect(`mongodb://localhost/${db_name}`, {useMongoClient: true});

// fs.readdirSync(models_path).forEach(function(file) {
// 	if(file.indexOf('.js') >= 0) {
// 		require(models_path + '/' + file);
// 	}
// });