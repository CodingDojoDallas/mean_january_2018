// require mongoose
var mongoose = require('mongoose');

// create the schema
var QuoteSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name is required."]
    },
    quote: {
      type: String,
      required:[true, "Quote is required."]
    }

}, {timestamps: true});

// register the schema as a model
mongoose.model('Quote', QuoteSchema);

module.exports = mongoose.model('Quote');