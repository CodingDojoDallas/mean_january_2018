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
	if(req.session.count==undefined){
		req.session.count=1;
	}
	else{
		req.session.count+=1;
	}
	context = {
			"count":req.session.count
	}
 	//req.session.count = req.body.name;
 	res.render("index", context);
})


// post route for adding a user
app.post('/button', function(req, res) {
	//console.log("POST DATA", req.body);
	req.session.count+=1;
	res.redirect('/');
})
app.post('/reset', function(req, res) {
	//console.log("POST DATA", req.body);
	req.session.count=0;
	res.redirect('/');
})

//*****************************************
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
