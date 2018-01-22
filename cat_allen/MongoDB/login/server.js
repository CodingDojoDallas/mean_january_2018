var express 	= require('express')
	session 	= require('session')
	flash 		= require('flash')
	bodyParser
	path
	app
	routes
	port 

app.use(flash());

app.use( (req, res, next) => {
	if(req.query._method)
}