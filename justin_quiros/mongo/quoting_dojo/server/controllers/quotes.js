var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
  show: function(req, res) {
    quotes = Quote.find({}, function(err, quotes){
      console.log("here i am" , quotes);
      res.render("quotes", {'quotes': quotes});
    })
  },
  create: function(req, res) {
    var quote = new Quote({name: req.body.name, quote: req.body.quote, date: Date()});
    quote.save(function(err){
      if(err){
        console.log('something went wrong');
      } else{

        console.log('successfully added a quote!');
        res.redirect('/');
      }
    })
  }
}
