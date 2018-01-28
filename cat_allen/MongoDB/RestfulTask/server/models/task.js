var mongoose = require('mongoose');

var Task = mongoose.model('Task', new mongoose.Schema({
    title: {
        type: String,
    },

 	description: {
        type: String,
        default: ''
    },

    completed: {
    	type: Boolean,
    	default: false
    },

}, {timestamps: true}));

module.exports = mongoose.model('Task');