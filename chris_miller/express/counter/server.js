var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");

app.use(session(
{
	secret: 'hello',
	proxy: true,
	resave: false,
	saveUninitialized: true
}))

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function()
{
	console.log('listening on 8000')
});

app.get('/', (req, res) =>
{
	if (session.hasOwnProperty('counter') == false)
	{
		session.counter = 0;
	}
	session.counter++;
	context = { 'counter': session.counter}
	console.log(session.counter);
	res.render('index', context);
})

app.post('/add_2', function(req, res)
{
	session.counter++;

	res.redirect('/');
})

app.post('/reset', function(req, res)
{
	session.counter = 0;

	res.redirect('/');
})