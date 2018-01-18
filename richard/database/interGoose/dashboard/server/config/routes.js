var kitty = require('../controllers/kitty.js')

module.exports = function(app) {
    // Index
    app.get('/', (req, res) => {
        kitty.index(req,res);
    });

    // New Shows form
    app.get('/kitty/new', (req, res) => {
        kitty.new(req,res);
    });

    // Create Makes new kitty
    app.post('/kitty', (req, res) => { 
        kitty.create(req,res);
    });

    // Show
    app.get('/kitty/:id', (req, res) => {
        kitty.show(req,res);
    });

    // Edit
    app.post('/kitty/edit/:id', (req, res) => {
        Kitty.editPost(req,res);
    });

    // Destroy
    app.post('/kitty/destroy/:id', (req, res) => {
        Kitty.remove(req,res);
    });
}
