const mongoose  = require('mongoose');
const db_name   = 'login_registration';

mongoose.connect(`mongodb://localhost/${db_name}`);