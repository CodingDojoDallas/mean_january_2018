var mongoose 	= require('mongoose');

var Unicorn = mongoose.model('Unicorn', new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."]
    },
    age: {
        type: Number,
        required: [true, "Age is required."]
    },
    color: {
        type: String,
        required: [false]
    }
}, {timestamps: true}));

module.exports = mongoose.model('Unicorn');