
var mongoose = require('mongoose');
var Person   = mongoose.model('Person');
var ObjectId = require('mongodb').ObjectId;
var moment   = require('moment');

module.exports = {

	showAll: function(req, res) {
		Person.find({}, function(err, people) {
			if(err){
	    		console.log(err);
	    	}
	    	res.json(people);
	        //res.render('index', {"people": people, "moment":moment});
	    }).sort( { createdAt: -1 } )

	},

	create: function(req, res) {
		console.log("CREATE");
		console.log(req.params.name);
		var person = new Person({name:req.params.name});
	    person.save(function(err){
	        if(err){
	            console.log(err);
	        }
	        
	        res.redirect('/');
	       
	    });
	},

	show: function(req, res) {
	    Person.findOne({"name" :req.params.name}, function(err, person) {
	    	if(err){
	    		console.log(err);
	    	}
	    	res.json(person);
	    })

	},

	destroy: function(req, res) {
		var id = req.params.id;
	    var o_id = new ObjectId(id);
	    Person.remove({"name" :req.params.name}, function(err) {
	    	if(err){
	    		console.log(err);
	    	}
	    	res.redirect('/');
	    });
	}

}