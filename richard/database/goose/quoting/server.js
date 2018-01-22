import { error } from "util";

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

mongoose.connect('mongodb://localhost/quotingDojo');

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 6},
    quote: { type: String, required: true, minlength: 6},
    }, {timestamps: true });

var Quote = mongoose.model('Quote',QuoteSchema)

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/quotes', (req, res) => {
    var quote =new Quote(req.body);
    quote.save(function(error){ 
        if (error){
            res.render('index',{errors: quote.errors})
            console.log('What tha frack?');
        }
        else{
            res.redirect('/quote')
            console.log('The force is with you');
        }
    });
})

app.get('/quote', (req, res) => {
    Quote.find({}).sort({createdAt: descending}).exec(function(error,quote){
        res.render('quote', {'quote': quote})
    });
});

// Blah.find({}).sort({date: descending}).exec(function(err,docs){
// });


// app.post('/users', (req, res) => {
// 	var user = new User({name: req.body.name, age: req.body.age});
// 	user.save(function(err) {

// 	if(err) {
// 		console.log('something went wrong');
// 	} else {
// 		console.log('successfully added a user!');
// 		res.redirect('/');
// 	}
// })
// });


app.listen(6789, function() {
	console.log(`running on port ${port}`);
});