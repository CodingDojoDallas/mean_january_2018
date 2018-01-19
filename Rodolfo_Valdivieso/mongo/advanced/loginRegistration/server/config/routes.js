
var users = require('../controllers/sessions.js');

module.exports = function(app) {

	app.get('/', function(req, res) {
	    users.index(req, res);
	})

	app.get('/main', function(req, res) {
	    users.main(req, res);
	})

	app.post('/users', function(req, res) {
	    users.create(req, res);
	})

	app.post('/login', function(req, res) {
	    users.login(req, res);
	})

	
}