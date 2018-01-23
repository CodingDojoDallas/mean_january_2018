var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard');

var BearSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
}, {timestamps: true });
mongoose.model('Bear', BearSchema);
var Bear = mongoose.model('Bear');

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
    Bear.find({}, function(err, bears) {
        if (err) res.render('index');
        else {
            res.render('index', {bears: bears});
        }
    })
})

app.get('/bears/new', function(req, res){
    res.render('new');
})

app.get('/bears/:id', function(req, res) {
    console.log("The user id requested is:", req.params.id);
    Bear.find({_id: req.params.id}, function(err, bear){
        if (err) res.render('index');
        else{
            console.log("specific ID bear:", bear);
            res.render('show', {bear: bear});
        }
    })
})

app.post('/bears', function(req, res) {
    console.log("POST DATA", req.body);
    var bear = new Bear({name: req.body.name, age: req.body.age});
    bear.save(function(err){
        if (err){
            res.render('index', {errors: bear.errors})
        }
        else {
            console.log('Successfully added a bear!');
            res.redirect('/');
        }
    })
})

app.get('/bears/edit/:id', function(req, res) {
    Bear.find({_id: req.params.id}, function(err, bear){
        if (err) res.render('index', {errors: err});
        else{
            res.render('edit', {bear: bear});
        }
    })
})

app.post('/bears/:id', function(req, res) {
    Bear.update({_id: req.params.id}, {name: req.body.name, age: req.body.age}, function(err){
        if (err) res.render('show', {errors: err});
        else{
            res.redirect('/bears/'+req.params.id);
        }
    })
})

app.post('/bears/destroy/:id', function(req, res) {
    Bear.remove({_id: req.params.id}, function(err){
        if (err) res.render('index');
        else{
            res.redirect('/');
        }
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
