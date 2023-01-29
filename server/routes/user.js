const router = require('express').Router();
const { ObjectID } = require('bson');
let Users= require('../models/user.model')



router.route('/add').post((req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const new_user = new Users({
        username,
        password,
    });
    new_user.save()
    .then(()=> res.json('User added'))
    .catch(err=> res.status(400).json('Error' + err));
});



router.route('/').get((reg, res) => {
    Users.find().sort( { timeK: -1 }).exec(function(err, messages) { 
        res.json(messages)}); 
})


module.exports = router;
