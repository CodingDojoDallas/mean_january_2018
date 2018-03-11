const mongoose  = require('mongoose');
      db_name   = "posts";

mongoose.connect(`mongodb://localhost/${db_name}`);