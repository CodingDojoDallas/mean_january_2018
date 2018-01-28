var mongoose = require('mongoose');
var Unicorn = require('../models/unicorn.js');

module.exports = {

	index: (req, res) => {
        return res.redirect('/unicorns');
    },

	show: (req, res) => {
        Unicorn.find({}, (err, unicorns) => {
            if (err){
                console.log(err);
            }
            return res.render('index', {unicorns: unicorns})
        });
    },

	new: (req, res) => {
        return res.render('new');
    },

	create: (req, res) => {
        console.log("POST DATA", req.body);
        let unicorn = new Unicorn(req.body);
        unicorn.save((err) => {
            if (err) {
                console.log(err);
                return res.redirect('/unicorns/new');
            }
            console.log('successfully added a unicorn')
            return res.redirect('/');
        });
    },

	showone: (req, res) => {
        Unicorn.findOne({_id: req.params.id}, (err, unicorn) => {
            if(err) {
                console.log(err);
            }
            return res.render('show', {unicorn: unicorn});
        });
    },

	edit: (req, res) => {
        var unicorn = Unicorn.findOne({_id: req.params.id}, (err, unicorn) => {
            if (err) {
                console.log(err);
            }
            return res.render('edit', {unicorn: unicorn});

        });
    },
	
	update: (req, res) => {
        Unicorn.update({_id: req.params.id}, 
            req.body, (err, unicorn) => {
            if(err) {
                console.log(err);
            }
            return res.redirect('/');
        });
    },

	delete: (req, res) => {
        Unicorn.remove({_id: req.params.id}, (err, unicorn) => {
            if(err) {
                console.log(err);
            }
            return res.redirect('/');
        });
    },
}