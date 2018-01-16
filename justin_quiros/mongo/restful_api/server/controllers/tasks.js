var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
  index: function (req, res){
    tasks = Task.find({}, function(err, tasks){
    res.json(tasks);
  })
  },
  show: function(req, res) {
    task = Task.find({_id: req.params.id}, function(err, task){
    res.json(task);
  })
  },
  create: function(req, res) {
    var task = new Task({title: req.body.title, description: req.body.description});
    task.save(function(err){
      if(err){
        console.log('something went wrong');
        console.log(req.body);
        res.json("We were unable to create this task");

      } else{

        console.log('successfully added a task!');
        res.json("You have successfully created a task");
      }
    })
  },
  update: function(req, res) {
    const doc = {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      };
      task = Task.update({_id: req.params.id}, doc, function(err, raw) {
        if (err) {
          console.log(err);
        res.json("We were unable to update this task");
        }
        res.json("You have successfully updated this task");
      });
  },
  destroy: function(req, res) {
    task = Task.remove({_id: req.params.id}, function(err, task){
    res.json("You have successfully deleted this task");
  })
}
}
