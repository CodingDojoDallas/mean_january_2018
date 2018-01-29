
var players = require('../controllers/players.js');
var path  = require("path");
module.exports = function(app) {

	// app.get('/', function(req, res) {
	//     users.list(req, res);
	// })


	// app.get('/status/game/:game', function(req, res) {
	//     players.status(req, res);
	// })

	app.get('/players', function(req, res) {
	    players.list(req, res);
	})

	app.post('/players', function(req, res) {
	    players.create(req, res);
	})

	app.put('/players/:id/game/:game', function(req, res) {
	    players.update(req, res);
	})

	app.delete('/players/:id', function(req, res) {
	    players.destroy(req, res);
	})

	app.all("*", (request, response,next) => { response.sendFile(path.resolve("./client/dist/index.html")) });
/* remember that you'll need to require path for this to work! */

	
}