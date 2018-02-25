const express     = require('express');
const session     = require('express-session');
const bodyParser  = require('body-parser');
const path        = require('path');
const routes      = require('./server/config/routes.js');
const mongoose    = require('./server/config/mongoose.js');
const port        = 8000;

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.use(session({
    secret: 'secretpassword',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json());

routes(app);

app.listen(port, () => { console.log(`Listening on port ${port}`); });