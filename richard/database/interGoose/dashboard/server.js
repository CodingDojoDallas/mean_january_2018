var express = require("express"),
    app = express(),
    routes = require('./server/config/routes')
    session = require('express-session'),
    bodyParser = require('body-parser'),
    path = require("path"),
    mongoose = require('mongoose'),
    port = 6789;

app.use(session({
    secret: 'secretpassword',
    proxy: true,
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, '/client/static')));
app.set('views', path.join(__dirname, '/client/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/kitty');

routes(app);

app.listen(6789, function() {
    console.log(`running on port ${port}`);
});

