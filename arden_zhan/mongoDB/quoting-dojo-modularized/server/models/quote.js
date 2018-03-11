// require mongoose
var mongoose = require('mongoose');
// create the schema
var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
})
// register the schema as a model
var Quote = mongoose.model('Quote', QuoteSchema);
