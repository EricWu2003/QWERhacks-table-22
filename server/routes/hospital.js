const router = require('express').Router();
const { ObjectID } = require('bson');
const hospital = require('../models/hospital.model');
let Users= require('../models/hospital.model')

router.route('/').get((reg, res) => {
    Users.find()                             
    .then(users => res.json(users))       
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req,res) => {

    
    const hospital_name = req.body.hospital_name;
    const hospital_location = req.body.hospital_location;
    const hospital_rating = req.body.hospital_rating;
    const comments = req.body.comments;

    const new_hospital = new hospital({
        hospital_name,
        hospital_location,
        hospital_rating,
        comments,
    });

    new_hospital.save()
    .then(()=> res.json('Hospital added'))
    .catch(err=> res.status(400).json('Error' + err));
});
router.route('/').get((reg, res) => {
    hospital.find().sort( { timeK: -1 }).exec(function(err, messages) { 
        res.json(messages)
    
    })
});

router.route('/comments/:hospital_name').post((req, res) => {
    var query = { hospital_name: req.params.hospital_name};


       hospital.updateOne(
        {hospital_name: req.params.hospital_name},
        {$push: { comments: "hello"}}
    )

   
    res.json(req.body.comments)
});

router.route('/ratings').get((req, res) => {
    var query = { hospital_rating: 1 };
    hospital.find().sort( query ).exec(function(err, messages) { 
        res.json(messages)
    
    })
});

router.route('/ratings/:search').get((req, res) => {
    var query = { hospital_rating: req.params.search };

    hospital.find(query).exec(function(err, messages) { 
        res.json(messages)
    
    })

});

router.route('/location/:search').get((req, res) => {
    var query = { hospital_location: req.params.search };

    hospital.find(query).exec(function(err, messages) { 
        res.json(messages)
    
    })

});

module.exports = router;
