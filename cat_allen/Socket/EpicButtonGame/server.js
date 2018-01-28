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

var counter = 0; 

io.sockets.on("connection", function(socket) {
    console.log("Sockets are running!");

    // Listens for the "client_count" emit
    // from index.ejs before taking an
    // action on server.js
    socket.on("client_count", function(action) {
        // Increments the counter by 1
        // starting with zero
        counter++;
        console.log(counter);

        // "io.emit(...)" does a
        // full broadcast of this
        // server.js emit so that all
        // clients viewing the website
        // will see "counter" has
        // incremented by 1
        io.emit("server_counter", {response: counter});
    });
});