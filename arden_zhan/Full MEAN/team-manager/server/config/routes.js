const players = require('../controllers/players.js');
      path  = require('path');

module.exports = (app) => {
    app.get('/players', players.index);
    app.post('/players', players.create);
    
    app.all("*", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html")) });
}