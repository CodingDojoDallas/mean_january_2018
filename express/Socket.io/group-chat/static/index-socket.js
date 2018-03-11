$(document).ready(() => {
    var name = prompt('What is your name?');
    var socket = io.connect();

    socket.emit('got_a_new_user', {name: name});
    socket.on('online_count_response', (count) => {
        document.getElementsByClassName('online-count')[0].innerText = count;
    })

    function newUser(user){
        let userBody = document.createElement("p");
        userBody.innerHTML = user.name;
        userBody.className = user.id;
        $('.users-container').append(userBody);
    }

    function newMessage(message){
        let messageBody = document.createElement("p");
        messageBody.innerText = `${message.user}: ${message.content}`;
        $('.messages-container').append(messageBody);
    }

    socket.on('existing_users', (users) => {
        for (user of users) { newUser(user); }
    });

    socket.on('existing_messages', (messages) => {
        for (message of messages) { newMessage(message); }
    });

    socket.on('new_message', (message) => {
        newMessage(message);
    });

    socket.on('new_user', (user) => { 
        newUser(user);
    });

    socket.on('disconnected_user', (socket_id) => {
        let disconnected_name = document.getElementsByClassName(socket_id)[0].innerText;
        $(`.${socket_id}`).remove();
        newMessage({user: 'USER DISCONNECTED', content: disconnected_name});
    })

    $('form').submit((event) => {
        let message = {
            user: name,
            content: $('input[name=content]').val()
        };
        socket.emit("posting_message", message);
        $('form')[0].reset();
        event.preventDefault();
    });

})