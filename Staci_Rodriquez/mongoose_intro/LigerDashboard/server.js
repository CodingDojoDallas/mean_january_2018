var express = require("express"),
	app = express(),
	mongoose = require('mongoose'),
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

mongoose.connect('mongodb://localhost/liger_dashboard');

var LigerSchema = new mongoose.Schema({
	name: String,
	age: Number,
	color: String
})

mongoose.model('Liger', LigerSchema);
var Liger = mongoose.model('Liger')

app.get('/', (req, res) => {
	Liger.find({}, (err, ligers) => {
		res.render('index', {'ligers': ligers});
	});
});

app.get('/ligers/new', (req, res) => {
	res.render('new');
});

app.post('/ligers', (req, res) => {
	var liger = new Liger(req.body);
	liger.save(function(err){
		res.redirect('/');
	});
});

app.get('/ligers/:id', (req, res) => {
	Liger.findOne({_id: req.params.id}, (err, liger) => {
		res.render('show', {'liger': liger});
	});
});

app.get('/ligers/edit/:id', (req, res) => {
	Liger.findOne({_id: req.params.id}, (err, liger) => {
		res.render('edit', {'liger': liger});
	});
});

app.post('/ligers/:id', (req, res) => {
	Liger.update({_id: req.params.id}, req.body, (err, result) => {
		res.redirect('/');
	});
});

app.post('/ligers/destroy/:id', (req, res) => {
	Liger.remove({_id: req.params.id}, (err, liger) =>{
		res.redirect('/');
	});
});

app.listen(6789, function() {
	console.log(`running on port ${port}`);
})