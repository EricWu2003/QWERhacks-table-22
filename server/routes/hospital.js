const router = require('express').Router();
const { ObjectID } = require('bson');
let Users= require('../models/users.model')

router.route('/').get((reg, res) => {
    Users.find()                             
    .then(users => res.json(users))       
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req,res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const new_user = new Users({
        userName,
        password,
    });
    new_user.save()
    .then(()=> res.json('User added'))
    .catch(err=> res.status(400).json('Error' + err));
});