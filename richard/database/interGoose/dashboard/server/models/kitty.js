var mongoose = require ('mongoose');


module.exports = mongoose.model('Kitty', new mongoose.Schema({
    name: String,
    age: Number,
    color: String
    }));

