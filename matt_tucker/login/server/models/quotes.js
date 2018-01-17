var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema);

module.exports = mongoose.model('Quote');