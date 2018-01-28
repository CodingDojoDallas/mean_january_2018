// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var flash = require('connect-flash')
// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(session({
	secret: 'secretpassword',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));

app.use(flash());

app.use( ( req, res, next) =>{
	if (req.query._method === 'DELETE'){
		req.method = 'DELETE';
		req.url = req.path;
	}
	next();
})

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./client/static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
