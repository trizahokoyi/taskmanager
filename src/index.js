const express = require('express');
require('./db/mongoose');
const User = require('./model/user');
const Task = require('./model/task');

const app = express();  // invoking a function
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/users', (req,res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((error) => {
        res.status(400).send(error);
    });
});


app.get('/users', (req,res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((error) => {
        res.status(500).send();
    })
});

app.get('/users/:id', (req,res) => {
    const _id = req.params.id;

    User.findById(_id).then((user) => {
        if(!user){
            return res.status(404).send();
        }

        res.send(user);
    }).catch((e) => {
        res.status(500).send();
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' +port);
});
