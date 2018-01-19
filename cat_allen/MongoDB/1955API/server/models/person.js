var mongoose = require('mongoose');

var Person = mongoose.model('Person', new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."]
    }
}, {timestamps: true}));

module.exports = mongoose.model('Person');