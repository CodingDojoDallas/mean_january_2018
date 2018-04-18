const notes = require('../controllers/notes.js');
      path  = require('path');

module.exports = (app) => {
    app.get('/notes', notes.index);
    app.post('/notes', notes.create);
    
    app.all("*", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html")) });
}