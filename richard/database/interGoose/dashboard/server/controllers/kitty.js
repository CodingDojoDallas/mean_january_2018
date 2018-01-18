var Kitty = require('../models/kitty.js');

module.exports = {
    index: (req, res) => {
        Kitty.find({},(err,kitty) => {
            if (err) {
                console.log(err);
            }
            return res.render('index',{'kitty': kitty});
        });
    },

    new: (req, res) => {
        res.render('new');
    },

    create: (req, res) => {
        var kitty = new Kitty(req.body);
            kitty.save((err) => { 
                if (err){
                    console.log(err);
                    return res.redirect('/kitty/new');
                }
                return res.redirect('/');
        });
    },

    show: (req, res) => {
        Kitty.findOne({_id: req.params.id},(err,kitty) => {
            if (err){
                console.log(err);
            }
            return res.render('show',{'kitty': kitty});
        });
    },

    editForm: (req, res) => {
        kitty = Kitty.findOne({_id: req.params.id},(error,kitty) => {
            res.render('edit',{'kitty': kitty});
        });
    },

    editPost: (req, res) => {
        Kitty.update({_id: req.params.id}, req.body,(error, result) => {
            res.redirect('/');
        });
    },

    remove: (req, res) => {
        Kitty.remove({_id: req.params.id}, (error, kitty) => {
            res.redirect('/');
        });
    }
}
