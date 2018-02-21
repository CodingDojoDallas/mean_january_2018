$(document).ready(() => {
    var socket = io.connect();

    $('button').click((event) => {
        socket.emit("button_push", event.target.className);
    });

    socket.on('count_response', (count) => {
        $('.button-count').text(count);
    });
    
})