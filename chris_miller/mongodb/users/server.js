var express = require('express');
var app = express();
var mongoose = require ("mongoose");
var bodyParser = require("body-parser");
var session = require("express-session");

mongoose.connect('mongodb://localhost/user');

app.use(session(
{
	secret: 'hello',
	proxy: true,
	resave: false,
	saveUninitialized: true
}))

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function()
{
	console.log('listening on 8000')
});

app.get('/', (req, res) => {
	User.find({}, (error, users) => {
		
		return res.render('index', {'users': users});

	});
});

var UserSchema = new mongoose.Schema(
{
	name: String,
	age: Number
})

mongoose.model('User', UserSchema);
var User = mongoose.model('User')

app.post('/users', function(req, res)
{
	console.log("POST DATA", req.body);

	res.redirect('/');
})
