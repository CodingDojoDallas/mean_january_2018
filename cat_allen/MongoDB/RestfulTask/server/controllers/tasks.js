var mongoose = require('mongoose');
var Task = require('../models/task.js');
mongoose.Promise = global.Promise;

module.exports = {
	index: (req, res) => {
		Task.find({}, (err, tasks) => {
			if (err) {
				res.json(err);
			}
			return res.json(tasks);
		})
    },

    create: (req, res) => {
        let task = new Task({title: req.params.title, description: req.params.description, completed: req.params.completed});
        let thing = task.save();
        thing.then((doc) => {
        	res.json("added!" + doc);
        })
        thing.catch((err) => {
        	res.json(err);
        })
    },

    show: (req, res) => {
        Task.findOne({title: req.params.title}, (err, task) => {
            if (err){
                res.json(err);
            }
            return res.json(task);
        })
    },

    update: (req, res) => {
        Task.update({_id: req.params._id}, (err, task) => {
            if (err) {
                res.json(err);
            }
            return res.json(task);
        })

    },

    delete: (req, res) => {
		Task.remove({_id: req.params._id}, (err) => {
	        if(err) {
	            console.log("Could not delete:" + err);
	        }
	        return res.redirect('/');
	    })

    }
}

