// Require the Express Module
//npm install moment
var express = require('express');
// Create an Express App
var app = express();
//for dates formating
var moment = require('moment');
//Adding Mongoose
var mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
//Note: If you connect to a database that doesn't exist, mongoose WILL create the DB for you!
mongoose.connect('mongodb://localhost/basic_mongoose');
//creating Schemas
var UserSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 1},
    quote: { type: String, required: true }
}, {timestamps: true });

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

/*-----*/
// to make a model, you can first define a schema, which is just the BLUEPRINT for a model


/*-----*/
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
// Add User Request 
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            res.render('index', {errors: user.errors})
        }
        else {
            res.redirect('/quotes');
        }
    });
})
app.get('/quotes', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    User.find({}, function(err, users) {

    	res.render('result', {"quotes": users, "moment":moment});

    }).sort( { createdAt: -1 } )
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
