var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: [true, 'Title is required'], 
            minlength: [4, 'Minimum name length is 4']
        },
        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }]
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);