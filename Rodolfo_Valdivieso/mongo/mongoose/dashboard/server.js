//npm install moment
var express = require('express');
var app = express();
var moment = require('moment');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/dashboard');

var UserSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 1},
    height: { type: Number, required: true },
    weight: { type: Number, required: true }
}, {timestamps: true });

mongoose.model('Animal', UserSchema); // We are setting this Schema in our Models as 'User'
var Animal = mongoose.model('Animal') // We are retrieving this Schema from our Models, named 'User'
var ObjectId = require('mongodb').ObjectId;

var bodyParser = require('body-parser');
//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Animal.find({}, function(err, animals) {
        res.render('index', {"animals": animals, "moment":moment});
    }).sort( { createdAt: -1 } )
})

app.get('/mongooses/new', function(req, res) {
    res.render('new');
})
app.get('/mongooses/:id', function(req, res) {
    //var ObjectId = require('mongodb').ObjectId;
    var id = req.params.id;
    var o_id = new ObjectId(id);
    Animal.findOne({"_id" :o_id}, function(err, animal) {
        res.render('show', {"animal": animal, "moment":moment});
    })
})

app.get('/mongooses/edit/:id', function(req, res) {
    var id = req.params.id;
    var o_id = new ObjectId(id);
    Animal.findOne({"_id" :o_id}, function(err, animal) {
        res.render('edit', {"animal": animal, "moment":moment});
    })  
})

app.post('/mongooses/destroy/:id', function(req, res) {
    var id = req.params.id;
    var o_id = new ObjectId(id);
    
    Animal.remove({"_id" :o_id}, function() {
    // removed.
    res.redirect('/');
    });
})

app.post('/mongooses/:id', function(req, res) {
    console.log(req.body.name)
    var id = req.params.id;
    var o_id = new ObjectId(id);
    const doc = {
        name: req.body.name,
        height: req.body.height,
        weight: req.body.weight,
        updatedAt: Date.now(),
      };
      Animal.update({_id: o_id}, doc, function(err, raw) {
        if (err) {
          res.send(err);
        }
        //res.send(raw);
        res.redirect('/');
      });
})

app.post('/mongooses', function(req, res) {
    console.log("POST DATA", req.body);
    var animal = new Animal(req.body);
    animal.save(function(err){
        if(err){
            res.render('index', {errors: animal.errors})
        }
        else {
            res.redirect('/');
        }
    });
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
