var express = require("express"),
    app = express(),
    path = require ("path")
    bodyParser = require('body-parser'),
    port = 8000;
    mongoose = require('mongoose');

app.use(express.static (path.join(__dirname + "/static")) );
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dashboard');

var Unicorn = mongoose.model('Unicorn', new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."]
    },
    age: {
        type: Number,
        required: [true, "Age is required."]
    },
    color: {
        type: String,
        required: [false]
    }
}, {timestamps: true}));

//route route
app.get ('/', (req, res) => {
    return res.redirect('/unicorns');
});

//get all unicorns
app.get('/unicorns', (req, res) => {
    Unicorn.find({}, (err, unicorns) => {
        if (err){
            console.log(err);
        }
        return res.render('index', {unicorns: unicorns})
    });
});

//Renders page to create new Unicorn
app.get('/unicorns/new', (req, res) => {
    return res.render('new');
});

//Creates a new Unicorn
app.post('/unicorns', (req, res) => {
    console.log("POST DATA", req.body);
    let unicorn = new Unicorn(req.body);
    unicorn.save((err) => {
        if (err) {
            console.log(err);
            return res.redirect('/unicorns/new');
        }
        console.log('successfully added a unicorn')
        return res.redirect('/');
    });
});

//Get single unicorn by id (show page)
app.get('/unicorns/:id', (req, res) => {
    Unicorn.findOne({_id: req.params.id}, (err, unicorn) => {
        if(err) {
            console.log(err);
        }
        return res.render('show', {unicorn: unicorn});
    });
});

//Renders edit form
app.get('/unicorns/edit/:id', (req, res) => {
    var unicorn = Unicorn.findOne({_id: req.params.id}, (err, unicorn) => {
        if (err) {
            console.log(err);
        }
        return res.render('edit', {unicorn: unicorn});

    });
});

//Making the edit happen
app.post('/unicorns/:id', (req, res) => {
    Unicorn.update({_id: req.params.id}, 
        req.body, (err, unicorn) => {
        if(err) {
            console.log(err);
        }
        return res.redirect('/');
    });
});

app.post('/unicorns/delete/:id', (req, res) => {
    Unicorn.remove({_id: req.params.id}, (err, unicorn) => {
        if(err) {
            console.log(err);
        }
        return res.redirect('/');
    });
});


app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
