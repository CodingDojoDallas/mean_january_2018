var mongoose = require('mongoose');
var Quote = mongoose.model('../models/quote.js');
mongoose.Promise = global.Promise; 

module.exports = {

  show: function(req, res) {
    Quote.find({}, function(err, quotes) {
      res.render('quotes', {quotes: quotes});
    })
  },
  create: function(req, res) {
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/quotes');
      }
    })
  }
}