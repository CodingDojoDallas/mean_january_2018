// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/dashboard')

var PenguinSchema = new mongoose.Schema({
 name: String,
 best_friend: String,
 age: Number
})

mongoose.model('Penguin', PenguinSchema); // We are setting this Schema in our Models as 'Penguin'
var Penguin = mongoose.model('Penguin') // We are retrieving this Schema from our Models, named 'Quote'

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
	penguins = Penguin.find({}, function(err, penguins){
		// console.log("here i am" , penguins);
		res.render("index", {'penguins': penguins});
	})
})

app.get('/penguins/new', function(req, res) {
	res.render("new_penguin");
})

app.get('/penguin/:id', function(req, res) {
	penguin = Penguin.find({id: req.id}, function(err, penguin){
		// console.log("here i am" , penguin);
		res.render("penguin", {'penguin': penguin});
	})
})

app.get('/penguins/edit/:id', function(req, res) {
	var id = req.params.id;
    var o_id = new ObjectId(id);
	penguin = Penguin.find({_id: o_id}, function(err, penguin){
		res.render("edit_penguin", {'penguin': penguin});
	})

		console.log("here i am" , penguin);

})


app.post('/penguins', function(req, res) {
	console.log("POST DATA", req.body);
	// This is where we would add the user from req.body to the database.
	var penguin = new Penguin({name: req.body.name, best_friend: req.body.best_friend, age: req.body.age});
	penguin.save(function(err){
 		if(err){
 			console.log('something went wrong');
 		} else{

 			console.log('successfully added a penguin!');
 			res.redirect('/');
 		}
	})
})

app.post('/penguins/:id', function(req, res) {

	// console.log(req.body.name)
	// console.log(req.body.age)
	// console.log(req.body.best_friend)
    var id = req.params.id;
    var o_id = new ObjectId(id);
    const doc = {
        name: req.body.name,
        age: req.body.age,
        best_friend: req.body.best_friend,
      };
      Penguin.update({_id: o_id}, doc, function(err, raw) {
        if (err) {
          res.send(err);
        }
        res.redirect('/');
      });
})

app.post('/penguins/destroy/:id', function(req, res) {

	// console.log(req.body.name)
	// console.log(req.body.age)
	// console.log(req.body.best_friend)
    var id = req.params.id;
    var o_id = new ObjectId(id);
	penguin = Penguin.remove({_id: o_id}, function(err, penguin){
		res.redirect("/");
	})
})

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

