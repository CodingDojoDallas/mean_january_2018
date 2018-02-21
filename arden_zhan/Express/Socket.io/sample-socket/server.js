var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', function(req, res) {
    res.render('index');
})

// Listen
var server = app.listen(8000, () => { console.log('Listening on port 8000'); });
var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
    console.log(`Connected client/socket ID: ${socket.id}`);
    // all the server socket code goes in here 
    socket.on("button_clicked", (data) => {
        console.log('Someone clicked a button! Reason:', data.reason);
        socket.emit('server_response', {response: 'Sockets are the best!'});
    });

})
  