const {Double}=require('mongodb')
const mongoose= require('mongoose')

var Schema= mongoose.Schema;

var user_schema=new Schema({
    username:{type: String, required: true},
    password:{type: String, required: true},
}, {
    timestamps:true, 

});

const user=mongoose.model('User', user_schema);
module.exports= user;