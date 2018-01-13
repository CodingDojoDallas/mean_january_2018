// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/quoting_dojo')

var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String,
 date: String
})

mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'

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
	res.render("index")
})

app.get('/quotes', function(req, res) {
	quotes = Quote.find({}, function(err, quotes){
		console.log("here i am" , quotes);
		res.render("quotes", {'quotes': quotes});
	})
})



app.post('/quote', function(req, res) {
	console.log("POST DATA", req.body);
	// This is where we would add the user from req.body to the database.
	var quote = new Quote({name: req.body.name, quote: req.body.quote, date: Date()});
	quote.save(function(err){
 		if(err){
 			console.log('something went wrong');
 		} else{

 			console.log('successfully added a quote!');
 			res.redirect('/');
 		}
	})
})

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

