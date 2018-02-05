var mongoose = require('mongoose');
var Player = require('../models/player');

module.exports = {
    index: (req, res) => {
        Player.find({}, null, {sort: '-createdAt'}, (err, players) => {
            if (err) { return res.json(err); }
            return res.json(players);
        });
    },

    create: (req, res) => {
        const player = new Player(req.body);
        player.save( (err) => {
            if (err) { return res.json(err); }
            return res.json(player);
        })
    }
};
