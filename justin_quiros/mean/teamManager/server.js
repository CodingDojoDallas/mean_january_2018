var express		= require('express'),
	session 	= require('express-session'),
	bodyParser  = require('body-parser'),
	path 		= require('path'),
	app 		= express(),
	routes		= require('./server/config/routes.js'),
	port 		= 6789;

require('./server/config/mongoose.js');

app.use(session({
	secret: 'secretpassword',
	proxy: true,
	resave: false,
	saveUnitialized: true
}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client/dist')));

routes(app);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});