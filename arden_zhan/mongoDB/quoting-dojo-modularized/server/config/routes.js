// here we load the Quote model that we created on the server.js page
// var mongoose = require('mongoose');
// var Quote = mongoose.model('Quote');
// module.exports = function(app) {
//   app.get('/', function(req, res) {
//     res.render("index");
//   })
//   app.post('/quotes', function(req,res){
//     var quote = new Quote({name: req.body.name, quote: req.body.quote});
//     quote.save(function(err) {
//       if(err){
//         console.log("something went wrong");
//       } else {
//         res.redirect('/main');
//       }
//     })
//   })
//   app.get('/main', function (req, res) {
//     Quote.find({}, function (err, quotes){
//       res.render('main', {quotes:quotes});  
//     });
//   })
// }

var quotes = require('../controllers/quotes.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index')
  })
  app.post('/quotes', function(req,res){
    quotes.create(req, res)
  })
  app.get('/main', function (req, res) {
    quotes.show(req, res)
  })
}
