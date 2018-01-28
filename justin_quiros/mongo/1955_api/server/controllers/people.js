var mongoose = require('mongoose');
var Person = mongoose.model('Person');
module.exports = {
  main: function(req, res) {
    people = Person.find({}, function(err, people){
    res.json(people);
    })
  },
  show: function(req, res) {
    person = Person.find({name: req.params.name}, function(err, person){
    res.json(person);
    })
  },
  create: function(req, res) {
    console.log(req.params.name)
    person = new Person({name: req.params.name});
    person.save(function(err){
      if(err){
        console.log('something went wrong');
      } else{
        console.log('successfully added a person!');
      }
      res.redirect('/');
    })
  },
  destroy: function(req, res) {
    person = Person.remove({name: req.params.name}, function(err, person){
    res.redirect('/');
  })
 }
}
