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

var users = {};

io.sockets.on("connection", function(socket) {
    console.log("Sockets are running!");


    socket.on("new_user_from_client", function(data) {

        users[socket.id] = data.name;

        console.log(users);

        socket.emit("client_name", {name: data.name});
    });

    socket.on("message_text", function(data) {
        console.log(users[socket.id] + ": " + data.message);

        io.emit("server_message_text", {user_message: "<strong>" + users[socket.id] + "</strong>: " + data.message});

    });

});
