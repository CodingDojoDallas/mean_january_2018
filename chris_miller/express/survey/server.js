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
	res.render('index');
})

app.post('/submit', (req, res) =>
{
	session.form_data = req.body;
	console.log(session.form_data);
	res.redirect('/result');
})

app.get('/result', (req, res) =>
{
	context = {
		'name': session.form_data.name,
		'location': session.form_data.location,
		'language': session.form_data.language,
		'comment': session.form_data.comment
	}

	res.render('result', context);
})