var dudes = require('../controllers/controller.js')

module.exports = (app) => {
	// Index
	app.get('/', (req, res) => {
		dudes.index(req, res);
	});
	app.get('/new/:name/', (req, res) => {
		dudes.create(req, res);
	});
	app.get('/:name', (req, res) => {
		dudes.show(req, res);
	})
	app.get('/remove/:name/', (req, res) => {
	dudes.destroy(req, res);
	});
}