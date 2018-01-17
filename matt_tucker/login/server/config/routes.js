var users = require('../controllers/users.js');
var sessions = require('../controllers/sessions.js');
var quotes = require('../controllers/quotes.js');

module.exports = (app) => {
    // Users
    app.get('/', users.index);
    app.get('/users/new', users.new);
    app.post('/users', users.create);
    app.get('/users/:id', users.show);

    // Sessions
    app.get('/sessions/new', sessions.new);
    app.post('/sessions', sessions.create);
    app.delete('/sessions', sessions.delete);

    // Quotes
    app.get('/quotes', quotes.index);
    app.post('/quotes', quotes.create);
}