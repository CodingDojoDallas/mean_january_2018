var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    show_all: function(req, res){
        Task.find({}, function(err, tasks){
            if (err) console.log(err);
            else res.json(tasks);
        });
    },
    show: function(req, res){
        Task.find({_id: req.params.id}, function(err, task){
            if (err) console.log(err);
            else res.json(task);
        });
    },
    create: function(req, res) {
        var task = new Task(req.body);
        task.save(function(err){
            if (err) console.log(err);
            else res.redirect('/tasks');
        });
    },
    update: function(req, res) {
        Task.update({_id: req.params.id}, req.body, function(err){
            if (err) console.log(err);
            else res.redirect('/tasks/' + req.params.id);
        });
    },
    destroy: function(req, res) {
        Task.remove({_id: req.params.id}, function(err) {
            if (err) console.log(err);
            else res.redirect('/tasks');
        });
    },
};