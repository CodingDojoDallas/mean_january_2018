var express = require("express"),
	app = express(),
	mongoose = require('mongoose'),
	session = require('express-session'),
	path = require("path"),
	bodyParser = require('body-parser'),
	port = 6789;

app.use(express.static(path.join(__dirname, '/static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'secretpassword',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/kitty');

var KittySchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String
    });

var Kitty = mongoose.model('Kitty',KittySchema)

app.get('/', (req, res) => {
    Kitty.find({},(error,kitty) => {
        res.render('index',{'kitty': kitty});
    });
});

app.get('/kitty/new', (req, res) => {
    res.render('new');
});

app.post('/kitty', (req, res) => {
    var kitty = new Kitty(req.body);
    kitty.save(function(error){ 
        res.redirect('/');
    });
})

app.get('/kitty/:id', (req, res) => {
    kitty = Kitty.findOne({_id: req.params.id},(error,kitty) => {
        // console.log('req.id',req.params.id)
        res.render('show',{'kitty': kitty});
    });
});

app.get('/kitty/edit/:id', (req, res) => {
    kitty = Kitty.findOne({_id: req.params.id},(error,kitty) => {
        res.render('edit',{'kitty': kitty});
    });
});

app.post('/kitty/:id', (req, res) => {
    Kitty.update({_id: req.params.id}, req.body,(error, result) => {
        res.redirect('/');
    });
});

app.post('/kitty/destroy/:id', (req, res) => {
    Kitty.remove({_id: req.params.id}, (error, kitty) => {
        res.redirect('/');
    });
});




// app.post('/users', (req, res) => {
// 	var user = new User({name: req.body.name, age: req.body.age});
// 	user.save(function(err) {

// 	if(err) {
// 		console.log('something went wrong');
// 	} else {
// 		console.log('successfully added a user!');
// 		res.redirect('/');
// 	}
// })
// });


app.listen(6789, function() {
	console.log(`running on port ${port}`);
});