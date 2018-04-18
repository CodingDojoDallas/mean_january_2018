const tasks = require('../controllers/tasks');
const path  = require('path');

module.exports = (app) => {
  app.get     ('/tasks'     , tasks.retrieveAll);
  app.get     ('/tasks/:id' , tasks.retrieveOne);
  app.post    ('/tasks'     , tasks.create);
  app.put     ('/tasks/:id' , tasks.update);
  app.delete  ('/tasks/:id' , tasks.delete);

  app.all('**', (req, res) => { res.sendFile(path.resolve('./client/dist/index.html')) });
}