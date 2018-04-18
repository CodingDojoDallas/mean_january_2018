const users     = require('../controllers/users');
const sessions  = require('../controllers/sessions');

module.exports = (app) => {

  app.get('/', (req, res) => {res.render('index') });

  app.get('/users', users.retrieveAll);
  app.get('/users/:id', users.retrieveOne);
  app.post('/users', users.create);

  app.post('/sessions', sessions.create);
  app.post('/sessions/delete', sessions.delete);

  app.all('**', (req, res) => { res.redirect('/') });
}