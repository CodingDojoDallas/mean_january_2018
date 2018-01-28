var express = require("express"),
	app = express(),
	session = require('express-session'),
	path = require("path"),
	bodyParser = require('body-parser'),
	port = 6789;

app.use(express.static(path.join(__dirname, '/static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'secretpassword',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render("index");
});

app.post('/submit', (req, res) => {
	session['form_data'] = req.body;
	res.redirect('/result');
});

app.get('/result', (req, res) => {
	context = {
		'name': session['form_data']['name'],
		'location': session['form_data']['location'],
		'language': session['form_data']['language'],
		'comment': session['form_data']['comment']
	}	
	res.render('result', context);
});

app.listen(6789, function() {
	console.log(`running on port ${port}`);
})

