// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// session module - allows you to store information in session
var session = require('express-session')
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
	secret: 'secretpassword',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
	if(session.counter == undefined){
		console.log('counter not set');
		counter = session.counter = 1;
	}
	else{
		console.log('incrementing');
		counter = session.counter += 1;
	}
 res.render("index");
})

app.post('/plusTwo', function(req, res) {
	session.counter++
	console.log(session.counter);
 res.redirect("/");
})

app.post('/reset', function(req, res) {
	session.counter = 0
	console.log(session.counter);
 res.redirect("/");
})


// post route for adding a user
// app.post('/users', function(req, res) {
//  console.log("POST DATA", req.body);
//  // This is where we would add the user to the database
//  // Then redirect to the root route
//  res.redirect('/');
// })
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
