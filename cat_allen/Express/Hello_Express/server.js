tuvar express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(session({
    secret: 'secretpassword',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
})

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})

    