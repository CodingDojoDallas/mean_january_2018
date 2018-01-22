// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "message_board" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/message_board')//Need to change to connect to new database

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 4},
  content: {type: String, required: true, minlength: 4},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
  },{usePushEach: true}, {timestamps: true}); 

var CommentSchema = new mongoose.Schema({
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
  name: {type: String, required: true, minlength: 4},
  content: {type: String, required: true}
  }, {timestamps: true}); 

mongoose.model('Message', MessageSchema); // We are setting this Schema in our Models as 'Message'
mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'Comment'

var Message = mongoose.model('Message') // We are retrieving this Schema from our Models, named 'Message'
var Comment = mongoose.model('Comment') // We are retrieving this Schema from our Models, named 'Comment'


// Use native promises
mongoose.Promise = global.Promise;


app.use(session({
	secret: 'secretpassword',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');




// root route to render the index.ejs view
app.get('/', function(req, res) {
	Message.find({})
 	.populate('comments')
 	.exec(function(err, messages) {
	res.render("index", {messages: messages});
 	console.log(messages);
    });
})


app.post('/post_message', function(req, res) {
	// This is where we would add the message from req.body to the database.
	var message = new Message({name: req.body.name, content: req.body.content});
	message.save(function(err){
 		if(err){
 			console.log('something went wrong');
 		} else{
 			console.log('successfully added a message!');
 			res.redirect('/');
 		}
	})
})


// route for creating one comment with the parent post id
app.post('/post_comment/:id', function (req, res){
  Message.findOne({_id: req.params.id}, function(err, message){
     var comment = new Comment({name: req.body.name, content: req.body.content});
     comment._message = message._id;
     message.comments.push(comment);
     comment.save(function(err){
         message.save(function(err){
               if(err) { console.log(err); } 
               else { res.redirect('/'); }
             });
     });
   });
 });





// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});


