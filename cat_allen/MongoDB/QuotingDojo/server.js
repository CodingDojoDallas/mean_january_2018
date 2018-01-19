var express = require("express"),
    app = express(),
    path = require ("path"),
    bodyParser = require('body-parser'),
    // session = require('express-session'),
    port = 8000,
    routes_setter = require('./server/config/routes.js');

app.use(express.static (path.join(__dirname + "./client/static")) );
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname + './client/views'));
app.set('view engine', 'ejs');

routes_setter(app);

app.listen(port, () => {
    console.log(`listening on port 8000`);
});