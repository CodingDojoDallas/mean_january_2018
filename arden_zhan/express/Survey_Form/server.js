var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({secret: 'sessionencrypt'}));

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

app.get('/result', function(req, res){
    res.render('result', {result: req.session.result});
})

app.post('/result', function(req, res) {
    req.session.result = req.body;
    res.redirect('/result');
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});
