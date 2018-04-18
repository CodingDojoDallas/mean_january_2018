const mongoose  = require('mongoose');
      db_name   = "anonymous_notes";

mongoose.connect(`mongodb://localhost/${db_name}`);