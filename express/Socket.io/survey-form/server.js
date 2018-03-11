var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

// Listen
var server = app.listen(8000, () => { console.log('Listening on port 8000'); });
var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
    console.log(`Connected client/socket ID: ${socket.id}`);

    socket.on("posting_form", (data) => {
        socket.emit('server_response', JSON.stringify(data));
        socket.emit('random_number', { number: Math.floor(Math.random()*1000)+1 });
    });

})
