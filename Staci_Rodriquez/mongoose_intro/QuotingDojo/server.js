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

mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
	name: { type: String, required: true},
	quote: { type: String, required: true}
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')


app.get('/', (req, res) => {
	res.render("index");
});

app.post('/quotes', (req, res) => {
	var quote = new Quote(req.body);
	quote.save(function(err){

		if(err){
			res.render('index', {errors: quote.errors})
		}
		else{
			res.redirect('/quotes');
		}
	});
});

app.get('/quotes', (req, res) => {
	Quote.find({}).sort({createdAt: 'desc'}).exec(function(err, quotes) {
		res.render('quotes', {'quotes': quotes});
	});
});


app.listen(6789, function() {
	console.log(`running on port ${port}`);
})