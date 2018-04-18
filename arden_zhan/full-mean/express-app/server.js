// Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// Static Directory
app.use(express.static(path.join(__dirname, '/angular-app/dist')));
// app.use(express.static(path.join(__dirname, "./static")));

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/full_mean');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Task title is required'],
        minlength: [3, 'Task title length must be greater than 5'],
        unique: true
    },
    description: {
        type: String,
        default: ""
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }  
}, { timestamps: true }
);
mongoose.model('Task', TaskSchema);
const Task = mongoose.model('Task');

// Controller
const TaskController = {
    index: (req, res) => {
        Task.find({})
            .then(tasks => res.json(tasks))
            .catch(error => console.log(error));
    },
    create: (req, res) => {
        console.log(req.body);
        Task.create(req.body)
            .then(task => res.json(task))
            .catch(error => console.log(error));
    }
};

// Routes
app
.get('/tasks', TaskController.index)
.post('/tasks', TaskController.create)

app.all("*", (req, res) => { res.sendFile(path.resolve("./angular-app/dist/index.html")) });


// Listen
app.listen(8000, function() {
    console.log("listening on port 8000");
});
