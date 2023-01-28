const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { application } = require('express');
require('dotenv').config();

const blinkApp = express ();
const port = process.envPort|| 5056;

qwer_hacks.use(cors());
qwer_hacks.use(express.json());

const url= "mongodb+srv://LiyuZer:bFnkjqtwOXOvlwh6@blink.do1er.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url);


const connection = mongoose.connection;
connection.once('open', () =>{

    console.log("The connection was established");
})

const hospital_router= require('./routes/hospital');
const user_router= require('./routes/user');

qwer_hacks.use('/messages', hospital_router);
qwer_hacks.use('/users', user_router);

qwer_hacks.listen(port, ()=> {

    console.log(`port: ${port}`)
});