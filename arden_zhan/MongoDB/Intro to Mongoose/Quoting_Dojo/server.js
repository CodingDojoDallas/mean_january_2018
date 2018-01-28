var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quote: { type: String, required: true }
}, {timestamps: true });
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

// Use native promises
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// ROUTES
app.get('/', function(req, res) {
    res.render('index');
})

app.get('/quotes', function(req, res) {
    Quote.find({}, null, {sort: {createdAt: -1}}, function(err, quotes) {
        if (err) res.render('quotes', {errors: err});
        else {
            console.log(quotes);
            res.render('quotes', {quotes: quotes});
        }
    })
})

app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({name: req.body.name, quote:req.body.quote});
    quote.save(function(err){
        if (err){
            res.render('index', {errors: quote.errors})
        }
        else {
            console.log('Successfully added a quote!');
            res.redirect('/quotes');
        }
    });
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
