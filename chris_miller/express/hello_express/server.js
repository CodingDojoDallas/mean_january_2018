var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");

app.use(session({
	secret: "secretpassword",
	proxy: true,
	resave: false,
	saveUninitialized: true
}))

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));

// for HTML
app.set('views', __dirname + '/views');
// set the view engine itself so that express knows we're using ejs for templating
app.set('view engine', 'ejs');

app.listen(8000, function()
{
	console.log("listening on 8000");
});

app.get('/', function(req, res)
{
	res.render('index');
});

app.get("/users", function (req, res)
{
	// hard-coded user data for testing
	var users_array = [
		{name: "Michael", email: "michael@test.com"},
		{name: "Authman", email: "app@test.com"},
		{name: "Matt", email: "matt@test.com"}
	];
		res.render('users', {users: users_array});
});
// route to process new user form data:
app.post('/users', function (req, res)
{
	// code to add user to db goes here
	// now redirect to root route
	res.redirect('/');
});

app.post('/submit', function(req, res)
{
	console.log("In the submit method");
	
	session['form_data'] = req.body;

	res.redirect('/success');
});

app.get('/success', function(req, res)
{
	console.log(session['form_data']);

	context = {
		'first_name': session['form_data']['first_name']
	}

	res.render('success', context);
});