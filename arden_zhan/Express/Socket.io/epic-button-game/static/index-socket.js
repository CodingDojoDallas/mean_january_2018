$(document).ready(() => {
    var socket = io.connect();

    $('button').click((event) => {
        var className = event.target.className;
        socket.emit("button_push", className)
        console.log("click emitted", className);
    });

    socket.on('count_response', (count) => {
        $('.button-count').text(count);
    });
    
})