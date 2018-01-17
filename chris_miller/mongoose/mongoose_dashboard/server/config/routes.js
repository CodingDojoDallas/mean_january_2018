var coyotes = require('../controllers/controller.js')

module.exports = (app) => {
	// Index
	app.get('/', (req, res) => {
		console.log("hello2");
		coyotes.index(req, res);
		console.log("hello3");
	});
	app.get('/coyotes/new', (req, res) => {
		coyotes.new(req, res);
	});
	app.post('/coyotes', (req, res) => {
		coyotes.create(req, res);
	});
	app.get('/coyotes/:id', (req, res) => {
		coyotes.show(req, res);
	})
}