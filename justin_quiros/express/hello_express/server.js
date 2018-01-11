var express = require("express");
var app = express();
// var bodyParser = require('body-parser');
var session = require('express-session')

// this is the line that tells our server to use the "/static" folder for static content
// Static is for css/js/imgs
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it




//Views is for html 
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');




app.get('/', function(req, res){
	res.send("Hello Express");
})

app.listen(8000, function(){
	console.log("listening on 8000");
})


// This sets the location where express will look for the ejs views



app.get("/users", function (req, res){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})





// app.use(session({
// 	secret: 'secretpassword',
// 	proxy: true,
// 	resave: false,
// 	saveUninitialized: true
// }));