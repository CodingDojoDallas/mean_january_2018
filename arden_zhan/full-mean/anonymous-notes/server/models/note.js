var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema(
    {
        title: {type: String, required: [true, 'Title is required']},
        content: {type: String, required: [true, 'Content is required']}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Note', NoteSchema);