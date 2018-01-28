var people = require('../controllers/people');

module.exports = (app) => {

	app.get('/', people.index);

	app.get('/name', people.show);

	app.get('/new/:name', people.create);

	app.get('/delete/:name', people.delete);


}