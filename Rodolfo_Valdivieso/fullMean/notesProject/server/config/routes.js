
var notes = require('../controllers/notes.js');
var path  = require("path");
module.exports = function(app) {

	// app.get('/', function(req, res) {
	//     users.list(req, res);
	// })

	app.get('/notes', function(req, res) {
	    notes.list(req, res);
	})

	app.post('/notes', function(req, res) {
	    notes.create(req, res);
	})

	app.all("*", (request, response,next) => { response.sendFile(path.resolve("./notes/dist/index.html")) });
/* remember that you'll need to require path for this to work! */

	
}