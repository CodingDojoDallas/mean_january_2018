const mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  building: {
    type: String,
    required: [true, 'Building is required']
  },
  gold: {
    type: Number,
    required: [true, 'Earned/Lost Gold is required']
  }
}, {timestamps: true});

module.exports = mongoose.model('Message', MessageSchema);