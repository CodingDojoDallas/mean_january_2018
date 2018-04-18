var mongoose = require('mongoose');
var Bear = mongoose.model('Bear');

module.exports = {
    show_all: function(req, res){
        Bear.find({}, function(err, bears) {
            if (err) res.render('index');
            else {
                res.render('index', {bears: bears});
            }
        })
    },
    
    new: function(req, res){
        res.render('new');
    },

    show: function(req, res){
        console.log("The user id requested is:", req.params.id);
        Bear.find({_id: req.params.id}, function(err, bear){
            if (err) res.render('index');
            else{
                console.log("specific ID bear:", bear);
                res.render('show', {bear: bear});
            }
        })
    },

    create: function(req, res){
        console.log("POST DATA", req.body);
        var bear = new Bear({name: req.body.name, age: req.body.age});
        bear.save(function(err){
            if (err){
                res.render('index', {errors: bear.errors})
            }
            else {
                console.log('Successfully added a bear!');
                res.redirect('/');
            }
        })
    },

    edit: function(req, res){
        Bear.find({_id: req.params.id}, function(err, bear){
            if (err) res.render('index', {errors: err});
            else{
                res.render('edit', {bear: bear});
            }
        })
    },

    update: function(req, res){
        Bear.update({_id: req.params.id}, {name: req.body.name, age: req.body.age}, function(err){
            if (err) res.render('show', {errors: err});
            else{
                res.redirect('/bears/'+req.params.id);
            }
        })
    },

    destroy: function(req, res){
        Bear.remove({_id: req.params.id}, function(err){
            if (err) res.render('index');
            else{
                res.redirect('/');
            }
        })
    }
}