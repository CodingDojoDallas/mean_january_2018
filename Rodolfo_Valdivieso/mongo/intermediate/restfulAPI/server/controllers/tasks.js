
var mongoose = require('mongoose');
var Task   = mongoose.model('Task');
var ObjectId = require('mongodb').ObjectId;
var moment   = require('moment');

module.exports = {

	showAll: function(req, res) {
		Task.find({}, function(err, task) {
			if(err){
	    		console.log(err);
	    	}
	    	res.json(task);
	    }).sort( { createdAt: -1 } )

	},

	show: function(req, res) {
	    Task.findOne({_id:req.params.id}, function(err, task) {
	    	if(err){
	    		console.log(err);
	    	}
	    	res.json(task);
	    })

	},

	create: function(req, res) {
		var task = new Task({title:req.body.title, description:req.body.description});
	    task.save(function(err){
	        if(err){
	            console.log(err);
	        }
	        
	        res.redirect('/');
	       
	    });
	},

	update: function(req, res) {
	    const doc = {
	        title: req.body.title,
	        description: req.body.description,
	        completed: req.body.completed,
	        updatedAt: Date.now(),
	      };
	      Task.update({_id: req.params.id}, doc, function(err, raw) {
	        if(err){
	    		console.log(err);
	    	}
	        res.redirect('/');
	      });

	},
	

	destroy: function(req, res) {
	    Task.remove({_id:req.params.id}, function(err) {
	    	if(err){
	    		console.log(err);
	    	}
	    	res.redirect('/');
	    });
	}

}