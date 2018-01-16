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

mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	age: Number
})

mongoose.model('User', UserSchema);
var User = mongoose.model('User')


app.get('/', (req, res) => {
	User.find({}, (err, users) => {

		res.render('index', {'users': users});
	});
});


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