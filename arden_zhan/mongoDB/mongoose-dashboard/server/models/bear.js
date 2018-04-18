var mongoose = require('mongoose');

var BearSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
}, {timestamps: true });

var Bear = mongoose.model('Bear', BearSchema);