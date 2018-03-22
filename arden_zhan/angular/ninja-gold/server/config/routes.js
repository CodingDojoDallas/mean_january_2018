const messages = require('../controllers/messages');
const path  = require('path');

module.exports = (app) => {
  app.get     ('/messages'  , messages.retrieveAll);
  app.post    ('/messages'  , messages.create);

  app.all('**', (req, res) => { res.sendFile(path.resolve('./client/dist/index.html')) });
}