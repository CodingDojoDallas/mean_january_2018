var tasks = require('../controllers/tasks.js')

module.exports = (app) => {
	app.get('/tasks', function(req, res) {
		tasks.index(req, res)
	})

	app.get('/tasks/:id', function(req, res) {
		tasks.show(req,res)
	})

	app.post('/tasks', function(req, res) {
		tasks.create(req, res)
	})

	app.put('/tasks/:id', function(req, res) {
		tasks.update(req, res)
	})

	app.delete('/tasks/:id', function(req, res) {
		tasks.destroy(req, res)
	})
}
