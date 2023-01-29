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


router.route('/get').get((req,res) => {
    const hospial_name = req.body.hospial_name;
    const hospital_rating = req.body.hospital_rating;
    const comments = req.body.comments;
    const hopital_location = req.body.hospital_location;

    const new_hospital = new Users({
        hospial_name,
        hospital_location,
        hospital_rating,
        comments,
    });
   
    
});


router.route('/').get((reg, res) => {
    Users.find().sort( { timeK: -1 }).exec(function(err, messages) { 
        res.json(messages)}); 
})


module.exports = router;
