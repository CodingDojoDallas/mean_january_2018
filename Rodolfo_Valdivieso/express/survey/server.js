//npm install express
//npm install ejs
//npm install express-session
// require express
var express = require("express");
// create the express app
var app = express();
// path module -- try to figure out where and why we use this
var path = require("path");

var session = require('express-session');
//app.use(session({secret: 'codingdojorocks'}));
app.use(session({
    secret: 'secretpassword',
    proxy: true,
    resave: false,
    saveUninitialized: true
}));

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


//****************************************************
// root route to render the index.ejs view
app.get('/', function(req, res) {
 	res.render("index");
})

app.get('/result', function(req, res) {
	context = req.session.form_data;
 	res.render("result", context);
})

// post route for adding a user
app.post('/submit', function(req, res) {
	req.session.form_data=req.body;
	res.redirect('/result');
})
app.post('/goback', function(req, res) {
	res.redirect('/');
})

//*****************************************
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
