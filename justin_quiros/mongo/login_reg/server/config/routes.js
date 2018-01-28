var users = require('../controllers/users.js')
var sessions = require('../controllers/sessions.js')

module.exports = (app) => {
	app.get('/', function(req, res) {
		users.index(req,res)
	})
	app.get('/users', function(req, res) {
		users.index(req,res)
	})
	app.get('/users/:id', function(req, res) {
		users.show(req, res)
	})
	app.get('/users/edit/:id', function(req, res) {
		users.show_edit(req,res)
	})
	app.post('/users', function(req, res) {
		users.create(req, res)	
	})
	app.post('/users/:id', function(req, res) {
		users.edit(req, res)
	})
	app.post('/users/destroy/:id', function(req, res) {
		users.destroy(req, res)   
	})


	//session controller
	app.post('/login', function (req, res){
		sessions.create(req, res)
	})

	app.delete('/sessions', function (req, res){
		sessions.delete(req, res)
	})
}
