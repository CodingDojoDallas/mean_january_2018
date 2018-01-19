var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 1},
    height: { type: Number, required: true },
    weight: { type: Number, required: true }
}, {timestamps: true });

var Animal = mongoose.model('Animal', UserSchema);