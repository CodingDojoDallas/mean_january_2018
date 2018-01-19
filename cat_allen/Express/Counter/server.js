var express = require("express"),
	app = express(),
	path = require ("path")
	bodyParser = require('body-parser'),
	session = require('express-session'),
	port = 8000;

app.use(express.static (path.join(__dirname + "/static")) );
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'secretpassword',
    proxy: true,
    resave: false,
    saveUninitialized: true
}));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	if (session.count == undefined
		){
		console.log("Not defined.");
		session.count = 1;
	}
	else{
		console.log('Defined.');
		session.count += 1;
	}
    console.log(session.count);
    return res.render('index', {'count': session.count});
});

app.listen(port, function() {
    console.log(`listening on port 8000`);
})

    