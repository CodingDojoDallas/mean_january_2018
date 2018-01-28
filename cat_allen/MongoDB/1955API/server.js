var express = require("express"),
    app = express(),
    path = require ("path"),
    port = 8000,
    mongoose = require('mongoose'),
    routes = require('./server/config/routes.js');


require('./server/config/mongoose.js');

app.set('views', path.join(__dirname + '/client/views'));
app.set('view engine', 'ejs');

routes(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
