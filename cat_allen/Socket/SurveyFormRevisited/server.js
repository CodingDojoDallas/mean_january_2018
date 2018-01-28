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

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

app.get('/', function(req, res) {
    return res.render('index');
});

io.sockets.on('connection', (socket) =>{
console.log('socket connection');
console.log('socket id:', socket.id);
socket.on('posting_form', (data) =>{
  var random_number = Math.floor((Math.random() * 1000) + 1);
  socket.emit('updated_message', {response: data});
  socket.emit('random_number', {response: random_number});
  });
});

app.post("/gohome", function(req, res) {
    res.redirect("/");

});


