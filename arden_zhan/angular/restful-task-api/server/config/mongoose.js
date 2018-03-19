const mongoose  = require('mongoose');
const db_name   = 'restful_task_api';

// mongoose.connect(`mongodb://localhost/${db_name}`);
mongoose.connect('mongodb://arden:password@ds213229.mlab.com:13229/restful-tasks-api')