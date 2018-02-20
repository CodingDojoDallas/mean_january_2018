const mongoose  = require('mongoose');
const db_name   = "restful_task_api";

mongoose.connect(`mongodb://localhost/${db_name}`);