var session = require('express-session');
    Post    = require('../models/post');

module.exports = {
    index: (req, res) => {
        // Post.find({}, null, {sort: '-createdAt'}, (err, posts) => {
        //     if (err) { return res.status(400).json(err); }
        //     return res.json(posts);
        // });
        Post.find({})
        .populate('_user')
        .exec((err, posts) => {
            if (err) { return res.status(400).json(err); }
            return res.json(posts);
        });
    },

    create: (req, res) => {
        let post = new Post(req.body);

        post._user = session.user_id;
        post.save( (err) => {
            if (err) { return res.status(400).json(err.json()); }
            return res.json(post);
        });
    }
};
