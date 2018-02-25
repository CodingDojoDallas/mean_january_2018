const mongoose = require('mongoose');
const Task     = require('../models/task');

module.exports = {
    retrieveAll: (req, res) => {
        Task.find((err, tasks) => {
            if (err) return res.status(400).json(err);
            if (tasks == null) return res.status(404).json({message: "No tasks found"});
            return res.json(tasks);
        });
    },

    retrieveOne: (req, res) => {
        Task.findById(req.params.id, (err, task) => {
            if (err) return res.status(400).json(err);
            if (task == null) return res.status(404).json({message: "Task ID not found"});
            return res.json(task);
        });
    },

    create: (req, res) => {
        const task = new Task(req.body);
        task.save((err) => {
            if (err) return res.status(400).json(err);
            // Why should I redirect, get after post?
            // return res.json(task);
            return res.redirect(`/tasks/${task['_id']}`);
        });
    },

    update: (req, res) => {
        Task.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, task) => {
            if (err) return res.status(400).json(err);
            if (task == null) return res.status(404).json({message: "Task ID not found"});
            return res.json(task);
        });
    },

    delete: (req, res) => {
        Task.findByIdAndRemove(req.params.id, (err, task) => {
            if (err) return res.status(400).json(err);
            if (task == null) return res.status(404).json({message: "Task ID not found"});
            return res.json(task);
        });
    }
};