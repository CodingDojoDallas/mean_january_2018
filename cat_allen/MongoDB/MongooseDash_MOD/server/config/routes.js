
var unicorns = require('../controllers/unicorns.js');

module.exports = (app) => {

    //route route
    app.get('/', unicorns.index);

    //get all unicorns
    app.get('/unicorns', unicorns.show);

    //Renders page to create new Unicorn
    app.get('/unicorns/new', unicorns.new);

    //Creates a new Unicorn
    app.post('/unicorns', unicorns.create);

    //Get single unicorn by id (show page)
    app.get('/unicorns/:id', unicorns.showone);

    //Renders edit form
    app.get('/unicorns/edit/:id', unicorns.edit);

    //Making the edit happen - Update
    app.post('/unicorns/:id', unicorns.update);

    app.post('/unicorns/delete/:id', unicorns.delete);
}