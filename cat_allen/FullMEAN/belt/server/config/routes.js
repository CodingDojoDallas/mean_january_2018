var path	= require('path'),
	users 	= require('../controllers/users');
	sessions= require('../controllers/sessions');

module.exports = (app) => {
	//Server Routes are Plural!!!
	app.post('/users', users.create);
	app.get('/sessions', sessions.find);
	app.delete('/sessions', sessions.delete);
	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("/.client/dist/index.html"))
	});
}