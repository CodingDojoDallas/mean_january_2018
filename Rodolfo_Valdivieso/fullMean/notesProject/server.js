
var express      = require('express');
var app          = express();
var path         = require("path");
var bodyParser   = require('body-parser');
var session      = require('express-session')


require('./server/config/mongoose.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/notes/dist'));

// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})      