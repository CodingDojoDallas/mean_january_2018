$(document).ready(() => {
    var socket = io.connect();
    
    $('form').submit((event) => {
        var formData = $('form').serializeArray();
        socket.emit("posting_form", formData);
        event.preventDefault();
    });

    socket.on('server_response', (data) => {
        $('.form-data').text(`You emitted the following information to the server: ${data}`);
    });

    socket.on('random_number', (number) => {
        $('.lucky-number').text(`Your lucky number emitted by the server: ${number.number}`);
    });
    
})