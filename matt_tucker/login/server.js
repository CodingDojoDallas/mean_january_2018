var express     = require('express'),
    session     = require('express-session'),
    flash       = require('connect-flash'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    app         = express(),
    routes      = require('./server/config/routes.js'),
    port        = 6789;

require('./server/config/mongoose.js'),

app.use(session({
    secret: 'secretpassword',
    proxy: true,
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

// Middleware
app.use( (req, res, next) => {
    if (req.query._method === 'DELETE') {
        
        req.method = 'DELETE';
        
        req.url = req.path;
    }

    next(); 
});

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/client/static')));

app.set('views', path.join(__dirname, '/client/views'));

app.set('view engine', 'ejs');

routes(app);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});