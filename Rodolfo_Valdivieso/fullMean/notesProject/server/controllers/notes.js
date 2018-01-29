
var mongoose = require('mongoose');
var Note     = mongoose.model('Note');
var ObjectId = require('mongodb').ObjectId;
var moment   = require('moment');

module.exports = {

	list: function(req, res) {
		Note.find({}, function(err, notes) {
			if(err){
	    		console.log(err);
	    		return res.json(err);
	    	}
	        return res.json(notes);
	    }).sort( { createdAt: -1 } )

	},

	create: function(req, res) {
		var note = new Note(req.body);
	    note.save(function(err){
	        if(err){
	            console.log(err);
	            return res.json(err);
	        }
	        return res.json(note);
	    });
	}

}