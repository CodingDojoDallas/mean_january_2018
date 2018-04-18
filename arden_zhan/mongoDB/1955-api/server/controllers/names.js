var mongoose = require('mongoose');
var Name = mongoose.model('Name');

module.exports = {
    show_all: function(req, res){
        Name.find({}, function(err, names){
            if (err) console.log(err);
            else res.json(names);
        });
    },

    show: function(req, res){
        Name.find({name: req.params.name}, function(err, name){
            if (err) console.log(err);
            else res.json(name);
        });
    },

    create: function(req, res){
        var name = new Name({name: req.params.name});
        name.save(function(err){
            if (err) console.log(err);
            else res.redirect('/');
        });
    },

    destroy: function(req, res){
        Name.remove({name: req.params.name}, function(err){
            if (err) console.log(err);
            else res.redirect("/");
        });
    }
};
