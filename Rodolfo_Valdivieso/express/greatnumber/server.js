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
	req.session.value = 69;
	if (req.session.win==undefined){
		req.session.win="";
	}
	context = {"win":req.session.win};
 	res.render("index", context);
})

app.post('/play', function(req, res) {
	req.session.number = req.body.number;
	//console.log(req.session.number);
	if(req.body.number==req.session.value){
		req.session.win = "win";
	}
	else if(req.body.number<req.session.value){
		req.session.win = "low";
	}
	else{
		req.session.win = "high";
	}
 	res.redirect('/');
})

app.post('/reset', function(req, res) {
	req.session.win=undefined;
	res.redirect('/');
})

//*****************************************
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
