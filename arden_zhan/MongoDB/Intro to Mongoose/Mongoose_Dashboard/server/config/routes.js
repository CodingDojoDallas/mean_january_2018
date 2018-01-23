var bears = require('../controllers/bears.js');
module.exports = function(app){
    app.get('/', function(req, res){
        bears.show_all(req, res)
    })
    app.get('/bears/new', function(req, res){
        bears.new(req, res)
    })
    app.get('/bears/:id', function(req, res) {
        bears.show(req, res)
    })
    app.post('/bears', function(req, res) {
        bears.create(req, res)
    })
    app.get('/bears/edit/:id', function(req, res) {
        bears.edit(req, res)
    })
    app.post('/bears/:id', function(req, res) {
        bears.update(req, res)
    })
    app.post('/bears/destroy/:id', function(req, res) {
        bears.destroy(req, res)
    })
}