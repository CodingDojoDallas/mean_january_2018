var path 	= require('path');
	notes 	= require('../controllers/notes')

module.exports = (app) => {
	//Server Routes are plural
	app.get('/notes', notes.index);
	app.post('/notes', notes.create);


	

	app.all("*", (req, res, next) =>{
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}