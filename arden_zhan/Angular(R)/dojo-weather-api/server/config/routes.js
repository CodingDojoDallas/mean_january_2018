const path  = require('path');

module.exports = (app) => {    
    app.all("*", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html")) });
}