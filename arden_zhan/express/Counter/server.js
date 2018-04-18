var express = require("express");
var app = express();

var session = require('express-session');
app.use(session({secret: 'encryptionstring'}));

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    if (!req.session.count) req.session.count = 1;
    else req.session.count++;
    res.render('index', {count: req.session.count});
})

app.post('/add2', function(req, res){
    req.session.count += 1;
    res.redirect('/');
})

app.post('/reset', function(req, res){
    delete req.session.count;
    res.redirect('/');
})

app.listen(5000, function() {
    console.log("listening on port 5000");
})
