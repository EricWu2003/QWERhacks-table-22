const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { application } = require('express');
require('dotenv').config();
const { MongoClient } = require("mongodb");


const qwer_hacks = express ();
const port = process.envPort|| 5060;

qwer_hacks.use(cors());
qwer_hacks.use(express.json());

const uri="mongodb+srv://user:WvCWTl8M71iPfBTA@cluster0.rgjjbva.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);
 
     client.connect();


mongoose.connect(uri);


const connection = mongoose.connection;
connection.once('open', () =>{

    console.log("The connection was established");
})

const hospital_router= require('./routes/hospital');
const user_router= require('./routes/user');

qwer_hacks.use('/hospitals', hospital_router);
qwer_hacks.use('/users', user_router);

qwer_hacks.listen(port, ()=> {

    console.log(`port: ${port}`)
});