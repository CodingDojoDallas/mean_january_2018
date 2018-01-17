//npm install moment
var express      = require('express');
var app          = express();
var moment       = require('moment');
var mongoose     = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/dashboard');

var Schema     = mongoose.Schema;

var PostSchema = new mongoose.Schema({
 name: { type: String, required: true },
 text: { type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}], 
}, {timestamps: true });
//}, { timestamps: true }, { usePushEach: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.
mongoose.model('Post', PostSchema); // We are setting this Schema in our Models as 'User'
var Post = mongoose.model('Post') // We are retrieving this Schema from our Models, named 'User'

var CommentSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 name: { type: String, required: true },
 text: { type: String, required: true },
}, {timestamps: true });
//}, {timestamps: true }, { usePushEach: true });
mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'User'
var Comment = mongoose.model('Comment')


var ObjectId = require('mongodb').ObjectId;

var bodyParser = require('body-parser');
//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    Post.find({})
     .populate('comments')
     .exec(function(err, posts) {
          console.log(posts)
          res.render('index', {posts: posts});
    });
})

app.post('/posts', function(req, res) {
    //console.log("POST DATA", req.body);
    var post = new Post(req.body);
    post.save(function(err){
        if(err){
            console.log(post.errors)
            res.render('index', {errors: post.errors})
        }
        else {
            res.redirect('/');
        }
    });
})

// route for creating one comment with the parent post id
app.post('/posts/:id/comment', function (req, res){
//     Post.findOne({_id: req.params.id}, function(err, post){
// //Post.find({_id: req.params.id}, function(err, post){
//     //    console.log(post)
//   //Post.findOneAndUpdate({_id: req.params.id}, function(err, post){
//          var comment = new Comment(req.body);
//          comment._post = post._id;
//          //post.comments.push(comment);
//          comment.save(function(err){
//                 //console.log(err); 
//                 post.comments.push(comment);
//                 //
//                 post.save(function(err){
//                        if(err) { 
//                             console.log('Error'); 
//                             console.log(err); 
//                         } 
//                        else { res.redirect('/'); }
//                  });
//          });
//    });


    var comment = new Comment(req.body);
    var id = req.params.id;
    var o_id = new ObjectId(id);
    comment._post = o_id;
    comment.save(function(err){

    Post.findOneAndUpdate({_id: req.params.id},{ $push: { comments: comment } }, function(err, post){
        if(err) console.log("Something wrong when updating data"); 
        //console.log(post);  
        res.redirect('/');
        });
    });
 });


// app.get('/mongooses/new', function(req, res) {
//     res.render('new');
// })
// app.get('/mongooses/:id', function(req, res) {
//     //var ObjectId = require('mongodb').ObjectId;
//     var id = req.params.id;
//     var o_id = new ObjectId(id);
//     Animal.findOne({"_id" :o_id}, function(err, animal) {
//         res.render('show', {"animal": animal, "moment":moment});
//     })
// })

// app.get('/mongooses/edit/:id', function(req, res) {
//     var id = req.params.id;
//     var o_id = new ObjectId(id);
//     Animal.findOne({"_id" :o_id}, function(err, animal) {
//         res.render('edit', {"animal": animal, "moment":moment});
//     })  
// })

// app.post('/mongooses/destroy/:id', function(req, res) {
//     var id = req.params.id;
//     var o_id = new ObjectId(id);
    
//     Animal.remove({"_id" :o_id}, function() {
//     // removed.
//     res.redirect('/');
//     });
// })

// app.post('/mongooses/:id', function(req, res) {
//     console.log(req.body.name)
//     var id = req.params.id;
//     var o_id = new ObjectId(id);
//     const doc = {
//         name: req.body.name,
//         height: req.body.height,
//         weight: req.body.weight,
//         updatedAt: Date.now(),
//       };
//       Animal.update({_id: o_id}, doc, function(err, raw) {
//         if (err) {
//           res.send(err);
//         }
//         //res.send(raw);
//         res.redirect('/');
//       });
// })



app.listen(8000, function() {
    console.log("listening on port 8000");
})
