var express = require("express"),
	app = express(),
	path = require ("path")
	bodyParser = require('body-parser'),
	session = require('express-session'),
	port = 8000;

app.use(express.static (path.join(__dirname + "/static")) );
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'secretpassword',
    proxy: true,
    resave: false,
    saveUninitialized: true
}));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') 

app.get('/', function(req, res) {
    return res.render('index');
});

app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user from req.body to the database.
 res.redirect('/');
})

// app.post('/submit', function (req, res){

//     return res.redirect('/results');
// });

app.post("/gohome", function(req, res) {

    res.redirect("/");

});

app.listen(port, function() {
    console.log(`listening on port 8000`);
});