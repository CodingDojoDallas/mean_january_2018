
var mongoose = require('mongoose');
var Animal   = mongoose.model('Animal');
var ObjectId = require('mongodb').ObjectId;
var moment   = require('moment');

module.exports = {
	show: function(req, res) {
		var id = req.params.id;
	    var o_id = new ObjectId(id);
	    Animal.findOne({"_id" :o_id}, function(err, animal) {
	        res.render('show', {"animal": animal, "moment":moment});
	    })

	},

	showAll: function(req, res) {
		Animal.find({}, function(err, animals) {
	        res.render('index', {"animals": animals, "moment":moment});
	    }).sort( { createdAt: -1 } )

	},

	edit: function(req, res) {
		var id = req.params.id;
	    var o_id = new ObjectId(id);
	    Animal.findOne({"_id" :o_id}, function(err, animal) {
	        res.render('edit', {"animal": animal, "moment":moment});
	    })

	},

	destroy: function(req, res) {
		var id = req.params.id;
	    var o_id = new ObjectId(id);
	    Animal.remove({"_id" :o_id}, function() {
	    res.redirect('/');
	    });

	},

	update: function(req, res) {
		var id = req.params.id;
	    var o_id = new ObjectId(id);
	    const doc = {
	        name: req.body.name,
	        height: req.body.height,
	        weight: req.body.weight,
	        updatedAt: Date.now(),
	      };
	      Animal.update({_id: o_id}, doc, function(err, raw) {
	        if (err) {
	          res.send(err);
	        }
	        //res.send(raw);
	        res.redirect('/');
	      });

	},

	create: function(req, res) {
		var animal = new Animal(req.body);
	    animal.save(function(err){
	        if(err){
	            res.render('index', {errors: animal.errors})
	        }
	        else {
	            res.redirect('/');
	        }
	    });
	}
}