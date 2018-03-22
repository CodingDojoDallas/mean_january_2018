const Message = require('../models/message');

module.exports = {
    retrieveAll: (req, res) => {
        Message.find((err, messages) => {
            if (err) return res.status(400).json(err);
            // if (messages == null) return res.status(404).json({message: "No messages found"});
            return res.json(messages);
        });
    },

    create: (req, res) => {
        const message = new Message(req.body);
        message.save((err) => {
            if (err) return res.status(400).json(err);
            return res.json(message);
        });
    }
};