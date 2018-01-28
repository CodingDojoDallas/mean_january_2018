var express = require("express"),
    app = express(),
    path = require ("path")
    bodyParser = require('body-parser'),
    port = 8000;
    mongoose = require('mongoose'),
    routes_setter = require('./server/config/routes.js');

require('./server/config/mongoose.js');

app.use(express.static (path.join(__dirname + '/client/static')) );
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname + '/client/views'));
app.set('view engine', 'ejs');

routes_setter(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
