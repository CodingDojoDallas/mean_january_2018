var path 		= require('path');
	players 	= require('../controllers/players')


module.exports = (app) => {
	//Server Routes are plural
	app.get('/players', players.index);
	app.post('/players', players.create);
	app.post('/change', players.update);
	app.delete('/player/:id', players.delete);
	
	app.all("*", (req, res, next) =>{
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}