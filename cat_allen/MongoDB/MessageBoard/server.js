
var express = require("express"),
    app = express(),
    path = require ("path")
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 8000;

app.use(express.static (path.join(__dirname + "/static")) );
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/messageboard');

var Schema = mongoose.Schema;

var Post = mongoose.model('Post', new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name is required."]
    },
    content: {
      type: String,
      required: [true, "Comment is required otherwise...what's the point?"]
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {usePushEach: true, timestamps: true}));

var Comment = mongoose.model('Comment', new mongoose.Schema({
  name: {
    type: String,
  },
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  content: {type: String, required: true},
}, {usePushEach: true, timestamps: true}));

app.get('/', (req, res) => {
  Post.find({})
  .populate('comments')
  .exec((err, posts) =>{
    res.render("index", {posts: posts});
  });
});

app.get('/posts/:id', (req, res) => {
  Post.findOne({_id: req.params.id})
  .populate('comments')
  .exec(function(err, post) {
    res.render('post', {post: post});
  });
});

app.post('/post', (req, res) => {
  var post = new Post(req.body);
  post.save(function(err){
    if(err){
      console.log(post.errors);
      res.redirect('/');
    }
    else{
      res.redirect('/');
    }
  });
});

app.post('/posts/:id',(req, res) => {
  Post.findOne({_id: req.params.id}, (err, post) => {
    var comment = new Comment(req.body);
    comment._post = post._id;
    comment.save(function(err){
      post.comments.push(comment._id);
      if (err){
        console.log('comment error')
      }
      console.log(post);
      post.save(function(err){
        if(err){
          console.log(err);
        }
      });
      res.redirect('/');
    });
  });
});


let server = app.listen(port, () => {
  console.log('Server is locked and loaded. . .');
});