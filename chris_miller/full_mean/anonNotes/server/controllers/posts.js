var Post = require('../models/post');

module.exports = {
	index: (req, res) => {
		Post.find({}, (err, posts) => {
			if(err)
			{
				return res.json(err);
			}

			return res.json(posts);
		});
	},
	create: (req, res) => {
		const post = new Post(req.body);
		console.log("test" + post);

		post.save( (err) => {
			if (err) {
				return res.json(err);
			}

			return res.json(post);
		})
	}
}