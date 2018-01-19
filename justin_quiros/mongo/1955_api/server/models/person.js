// require mongoose
var mongoose = require('mongoose');
// create the schema
var PersonSchema = new mongoose.Schema({
 name: String
})
// register the schema as a model
var Person = mongoose.model('Person', PersonSchema) // We are retrieving this Schema from our Models, named 'Person'
