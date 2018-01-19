var mongoose = require('mongoose');
var Penguin = mongoose.model('Penguin');
var penguins = require('../controllers/penguins.js')

module.exports = (app) => {
	app.get('/', function(req, res) {
		penguins.main(req,res)
	})

	app.get('/penguins/new', function(req, res) {
		res.render("new_penguin");
	})

	app.get('/penguin/:id', function(req, res) {
		penguins.show(req, res)
	})
	app.get('/penguins/edit/:id', function(req, res) {
		penguins.show_edit(req,res)
	})


	app.post('/penguins', function(req, res) {
		penguins.create(req, res)	
	})

	app.post('/penguins/:id', function(req, res) {
		penguins.edit(req, res)
	})

	app.post('/penguins/destroy/:id', function(req, res) {
		penguins.destroy(req, res)   
	})
}
