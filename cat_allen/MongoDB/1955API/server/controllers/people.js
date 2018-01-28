var mongoose = require('mongoose');
var Person = require('../models/person.js');
mongoose.Promise = global.Promise;

module.exports = {
	index: (req, res) => {
		Person.find({}, (err, people) => {
			if (err) {
				res.json(err);
			}
			return res.json(people);
		})
    },

    create: (req, res) => {
        let person = new Person({name: req.params.name});
        let thing = person.save();

        thing.then((doc) => {
        	res.json("added!" + doc);
        })
        thing.catch((err) => {
        	res.json(err);
        })
    },

    show: (req, res) => {
        Person.findOne({name: req.params.name}, (err, person) => {
            if (err){
                res.json(err);
            }
            return res.json(person)
        })
    },

    delete: (req, res) => {
		Person.remove({name: req.params.name}, (err) => {
	        if(err) {
	            console.log("Could not delete:" + err);
	        }
	        return res.redirect('/');
	    })

    }
}

