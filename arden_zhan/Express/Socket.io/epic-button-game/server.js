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

var count = 0;

io.sockets.on('connection', (socket) => {
    console.log(`Connected client/socket ID: ${socket.id}`);
    socket.emit('count_response', count);

    socket.on("button_push", (btn) => {
        console.log("server listened");
        if (btn == "epic-btn") count++;
        else if (btn == "reset-btn") count = 0;
        io.emit('count_response', count);
    });

})
