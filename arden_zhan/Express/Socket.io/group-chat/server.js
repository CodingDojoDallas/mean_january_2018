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

var users = [];
var messages = [];
var online_count = 0;

io.sockets.on('connection', (socket) => {
    console.log(`Connected client/socket ID: ${socket.id}`);
    
    socket.on('got_a_new_user', (name) => {
        online_count++;
        io.emit('online_count_response', online_count);

        // emit existing users to new user
        if (users.length > 0) socket.emit('existing_users', users);
        if (messages.length > 0) socket.emit('existing_messages', messages);

        var new_user = {'id': socket.id, 'name': name.name};
        // push new user info to all users "database" (users array)
        users.push(new_user);
        
        // broadcast new user to everyone else
        io.emit('new_user', new_user);
        
    });

    socket.on('posting_message', (message) => {
        messages.push(message);
        io.emit('new_message', message);
    })

    socket.on('disconnect', () => {
        // Remove one from online count and broadcast to everyone else
        online_count--;
        socket.broadcast.emit('online_count_response', online_count);

        // Remove disconnected user from users "database"
        var index = users.findIndex((user) => {
            return user.id == socket.id;
        });
        if (index != -1) users.splice(index, 1);
        
        // Broadcast to everyone else the disconnected user
        socket.broadcast.emit('disconnected_user', socket.id);
        console.log(`Disconnected client/socket ID: ${socket.id}`);
    })

})


