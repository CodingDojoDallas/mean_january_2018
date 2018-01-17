

// var mongoose = require('mongoose');
// var Animal = mongoose.model('Animal');

var animals = require('../controllers/animals.js');

module.exports = function(app) {

	app.get('/', function(req, res) {
	    animals.showAll(req, res)
	})

	app.get('/mongooses/new', function(req, res) {
	    res.render('new');
	})
	app.get('/mongooses/:id', function(req, res) {
	    //var ObjectId = require('mongodb').ObjectId;
	    animals.show(req, res)
	    
	})

	app.get('/mongooses/edit/:id', function(req, res) {
	    animals.edit(req, res)
	})

	app.post('/mongooses/destroy/:id', function(req, res) {
	    animals.destroy(req, res)
	})

	app.post('/mongooses/:id', function(req, res) {
	    animals.update(req, res)
	})

	app.post('/mongooses', function(req, res) {
	    animals.create(req, res)
	})
}