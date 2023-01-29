const router = require('express').Router();
const { ObjectID } = require('bson');
let Users= require('../models/user.model')



router.route('/add').post((req,res) => {
  
    var query = { username: req.body.username };
    let return_statement='';
    const username = req.body.username;
            const password = req.body.password;
            const new_user = new Users({
                username,
                password,
            });
    Users.find(query).exec(function(err, messages) { 
        
        if(messages.length>0){
            res.status(400).json('Error, user not added, already exists');
        }
        else{
            new_user.save()
            .then(()=> res.json("User Added"))
            .catch(err=> res.status(400).json('Error' + err));    
        }
    
    });
   
    
});


router.route('/').get((reg, res) => {
    Users.find().sort( { timeK: -1 }).exec(function(err, messages) { 
        res.json(messages)}); 
})


module.exports = router;
