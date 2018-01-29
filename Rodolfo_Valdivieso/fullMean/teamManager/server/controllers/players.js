
var mongoose = require('mongoose');
var Player     = mongoose.model('Player');
var ObjectId = require('mongodb').ObjectId;
var moment   = require('moment');

module.exports = {

	list: function(req, res) {
		Player.find({}, function(err, players) {
			if(err){
	    		console.log(err);
	    		return res.json(err);
	    	}
	        return res.json(players);
	    }).sort( { createdAt: -1 } )

	},

	status: function(req, res) {
		Player.find({}, function(err, players) {
			if(err){
	    		console.log(err);
	    		return res.json(err);
	    	}
	        return res.json(players);
	    }).sort( { createdAt: -1 } )

	},

	create: function(req, res) {
		var player = new Player(req.body);
	    player.save(function(err){
	        if(err){
	            console.log(err);
	            return res.json(err);
	        }
	        return res.json(player);
	    });
	},
	
	update: function(req, res) {

		const doc = {
			status1: req.body.status1,
			status2: req.body.status2,
	    	status3: req.body.status3,
	        updatedAt: Date.now(),
	      };
	    
	      Player.update({_id: req.params.id}, doc, function(err, raw) {
	        if(err){
	    		return res.json(err);
	    	}
	    	console.log('goingo back');
	        return res.json(raw);
	      });

	},
	

	destroy: function(req, res) {
	    Player.remove({_id:req.params.id}, function(err, raw) {
	    	if(err){
	    		return res.json(err);
	    	}
	    	return res.json(raw);
	    });
	}

}