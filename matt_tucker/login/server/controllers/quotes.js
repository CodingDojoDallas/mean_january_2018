var Quote = require('../models/quotes.js');
var User = require('../models/users.js');

module.exports = {
    index: (req, res) => {
        Quote.find({}).populate('_user').exec( (err, quotes) => {

            return res.render('quotes/index', { quotes: quotes });
        });
    },
    create: (req, res) => {
        var quote = new Quote(req.body);

        User.findOne({ _id: req.body._user }, (err, user) => {
            if (err) {
                console.log(err.message);

                return res.redirect('/users');
            }

            quote.save( (err) => {
                if (err) {
                    console.log(err.message);

                    return res.redirect(`/users/${req.body._user}`);
                }

                user.quotes.push(quote._id);

                return res.redirect('/quotes');
            });
        });
    }
}