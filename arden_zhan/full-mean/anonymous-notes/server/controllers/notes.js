var mongoose = require('mongoose');
var Note = require('../models/note');

module.exports = {
    index: (req, res) => {
        Note.find({}, null, {sort: '-createdAt'}, (err, notes) => {
            if (err) { return res.json(err); }
            return res.json(notes);
        });
    },

    create: (req, res) => {
        const note = new Note(req.body);
        note.save( (err) => {
            if (err) { return res.json(err); }
            return res.json(note);
        })
    }
};
