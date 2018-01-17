// require mongoose
var mongoose = require('mongoose');
// create the schema
var TaskSchema = new mongoose.Schema({
 title: {type: String, required: true, minlength: 4},
 description: {type: String, required: true, minlength: 4},
 completed: {type: Boolean, default: false}
}, {timestamps: true}); 
// register the schema as a model
var Task = mongoose.model('Task', TaskSchema) // We are retrieving this Schema from our Models, named 'Person'
