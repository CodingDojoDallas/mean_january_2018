var tasks = require('../controllers/tasks.js');

module.exports = function(app){
    app.get('/tasks', (req, res) => {
        tasks.show_all(req, res)
    })

    app.get('/tasks/:id', (req, res) => {
        tasks.show(req, res)
    })
    app.post('/tasks', (req, res) => {
        tasks.create(req, res)
    })

    app.put('/tasks/:id', (req, res) => {
        tasks.update(req, res)
    })
    app.delete('/tasks/:id', (req, res) => {
        tasks.destroy(req, res)
    })
}