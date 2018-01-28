var tasks = require('../controllers/tasks');

module.exports = (app) => {

	app.get('/', tasks.index);

	app.get('/tasks', tasks.show);

	app.get('/new/:title,:description,:completed', tasks.create);

	app.get('/update/:id', tasks.update);

	app.get('/delete/:id', tasks.delete);


}