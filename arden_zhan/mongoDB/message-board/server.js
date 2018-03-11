var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var Schema = mongoose.Schema; 

var PostSchema = new mongoose.Schema({
    author: {type: String, required: true, minlength: 4},
    content: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref:'Comment'}]
}, {timestamps: true});

var CommentSchema = new mongoose.Schema({
    author: {type: String, required: true, minlength: 4},
    content: {type: String, required: true},
    _post: {type: Schema.Types.ObjectId, ref: 'Post'}
}, {timestamps: true});

mongoose.model("Post", PostSchema);
mongoose.model("Comment", CommentSchema);
var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");

// ROUTES
app.get("/", function(req, res) {
    Post.find({})
    .populate('comments')
    .exec(function(err, posts) {
        if (err) console.log('Error');
        else {
            res.render("index", {posts: posts});}
    });
});

app.post("/add_post", function(req, res) {
    var post = new Post(req.body);
    post.save(function(err) {
        if (err) res.render('index', {errors: post.errors});
        else res.redirect("/");
    });
});

app.post('/add_comment/:id', function (req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment(req.body);
        comment._post = post._id;
        post.comments.push(comment._id);
        
        comment.save(function(err){
            post.save(function(err){
                if (err) { console.log(err); } 
                else res.redirect('/');
            });
        });
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})