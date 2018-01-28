var express 	= require('express'),
	app 		= express(),
	routes		= require('./server/config/routes'),
	port 		= 8000,
	path		= require("path"),
	mongoose 	= require ("mongoose"),
	bodyParser 	= require("body-parser"),
	session 	= require("express-session");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/client/views'));

app.use(express.static(__dirname + '/client/static'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session(
{
	secret: 'hello',
	proxy: true,
	resave: false,
	saveUninitialized: true
}))

mongoose.connect('mongodb://localhost/coyote');

routes(app);

app.listen(8000, function()
{
	console.log('listening on 8000')
});