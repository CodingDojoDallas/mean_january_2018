var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: [true, 'Title is required'], 
            minlength: [4, 'Minimum title length is 4']
        },
        content: {
            type: String,
            required: [true, 'Content is required'],
            minlength: [4, 'Minimum content length is 4']
        },
        _user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);