// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session')

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
 res.render("index");
})


// post route for adding a user
app.post('/submit', function(req, res) {
 console.log("POST DATA", req.body);
 session.form_data = req.body;
 res.redirect("result");
})

app.get('/result', function(req, res) {
	context = {
		'name': session.form_data.name,
		'location': session.form_data.location,
		'language': session.form_data.language,
		'comment': session.form_data.comment
	}
 res.render("result", context);
})



// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
