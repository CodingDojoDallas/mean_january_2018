var quotes = require('../controllers/quotes.js')

module.exports = function(app){
	app.get('/', function(req, res) {
		res.render("index")
	})

	app.get('/quotes', function(req, res) {
		quotes.show(req, res)
	})

	app.post('/quote', function(req, res) {
		quotes.create(req,res)
	})
}