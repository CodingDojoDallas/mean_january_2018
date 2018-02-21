$(document).ready(() => {
    var name = prompt('What is your name?');
    var socket = io.connect();

    socket.emit('got_a_new_user', {name: name});

    function newUser(user){
        let userBody = document.createElement("p");
        userBody.innerHTML = `User: ${user.name}`;
        userBody.className = user.id;
        $('.users-container').append(userBody);
    }

    socket.on('existing_users', (users) => {
        for (user of users) {
            newUser(user);
        }
    });

    socket.on('new_user', (user) => {
        newUser(user);
    });

    socket.on('disconnected_user', (socket_id) => {
        $(`.${socket_id}`).remove();
    })
    
})