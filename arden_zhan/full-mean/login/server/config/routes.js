const path      = require('path');
      users     = require('../controllers/users.js');
      sessions  = require('../controllers/sessions.js');

module.exports = (app) => {
    app.get('/users', users.index);
    app.post('/users', users.create);

    app.get('/sessions', sessions.find);
    app.delete('/sessions', sessions.delete);
    
    app.all("*", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html")) });
}