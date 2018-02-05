const mongoose  = require('mongoose');
      db_name   = "team_manager";

mongoose.connect(`mongodb://localhost/${db_name}`);