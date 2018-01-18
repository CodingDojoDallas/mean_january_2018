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
	if (session.count == undefined){
		session.count = 1;
	}
	else {
		session.count ++;
	}
	return res.render("index", {'count': session.count});
});

app.post('/add2', (req, res) => {
	session.count += 1;
	res.redirect('/');
});

app.post('/reset', (req, res) => {
	session.count = 0;
	res.redirect('/');
});

app.listen(6789, function() {
	console.log(`running on port ${port}`);
})

