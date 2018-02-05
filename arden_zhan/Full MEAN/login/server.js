const express     = require('express');
      session     = require('express-session');
      bodyParser  = require('body-parser');
      path        = require('path');
      routes      = require('./server/config/routes.js');
      mongoose    = require('./server/config/mongoose.js');
      port        = 8000;

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.use(session({
    secret: 'secretpassword',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, function(){ console.log(`Listening on port ${port}`); });