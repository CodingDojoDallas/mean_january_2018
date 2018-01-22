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

let server = app.listen(port, () => {
  console.log('Server is locked and loaded. . .');
});

var io = require('socket.io').listen(server);

app.get('/', (req, res) => {
  res.render("index");
});
io.sockets.on('connection', (socket) => {
  console.log('Socket connection has been established for socket id:', socket.id);
});