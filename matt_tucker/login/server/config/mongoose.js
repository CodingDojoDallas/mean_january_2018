var mongoose    = require('mongoose'),     
    // path        = require('path'),
    // fs          = require('fs'),
    db_name     = 'new_login';

mongoose.connect(`mongodb://localhost/${db_name}`);

// var models_path = path.join(__dirname, '../models');

// fs.readdirSync(models_path).forEach((file) => {
//     if (file.indexOf('.js') >= 0) {
//         require(path.join(models_path, file));
//     }
// });