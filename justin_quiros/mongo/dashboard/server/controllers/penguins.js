var mongoose = require('mongoose');
var Penguin = mongoose.model('Penguin');
var ObjectId = require('mongodb').ObjectId;
module.exports = {
  main: function(req, res) {
    penguins = Penguin.find({}, function(err, penguins){
    console.log("here i am" , penguins);
    res.render("index", {'penguins': penguins});
    })
  },
  show: function(req, res) {
    var id = req.params.id;
    var o_id = new ObjectId(id);
    penguin = Penguin.find({_id: o_id}, function(err, penguin){
    res.render("penguin", {'penguin': penguin});
  })
  },
  create: function(req, res) {
    var penguin = new Penguin({name: req.body.name, best_friend: req.body.best_friend, age: req.body.age});
    penguin.save(function(err){
      if(err){
        console.log('something went wrong');
      } else{

        console.log('successfully added a penguin!');
        res.redirect('/');
      }
    })
  },
  edit: function(req, res) {
    var id = req.params.id;
    var o_id = new ObjectId(id);
    const doc = {
        name: req.body.name,
        age: req.body.age,
        best_friend: req.body.best_friend,
      };
      Penguin.update({_id: req.params.id}, doc, function(err, raw) {
        if (err) {
          res.send(err);
        }
        res.redirect('/');
      });
  },
  show_edit: function(req, res) {
    var ObjectId = require('mongodb').ObjectId;
    var id = req.params.id;
    var o_id = new ObjectId(id);
    penguin = Penguin.find({_id: o_id}, function(err, penguin){
      res.render("edit_penguin", {'penguin': penguin});
    })
  },
  destroy: function(req, res){
    var id = req.params.id;
    var o_id = new ObjectId(id);
    penguin = Penguin.remove({_id: o_id}, function(err, penguin){
    res.redirect("/");
    })
  }
}
