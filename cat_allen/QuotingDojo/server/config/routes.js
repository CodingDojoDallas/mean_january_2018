var quotes = require('../controllers/quotes.js')

module.exports = (app) => {

	app.get('/', quotes.show);

	app.post('/quotes', quotes.create);

}