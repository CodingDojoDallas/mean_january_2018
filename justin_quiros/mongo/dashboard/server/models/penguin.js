// require mongoose
var mongoose = require('mongoose');
// create the schema
var PenguinSchema = new mongoose.Schema({
 name: String,
 best_friend: String,
 age: Number
})
// register the schema as a model
var Penguin = mongoose.model('Penguin', PenguinSchema) // We are retrieving this Schema from our Models, named 'Penguin'
