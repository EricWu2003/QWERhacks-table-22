const {Double}=require('mongodb')
const mongoose= require('mongoose')

var Schema= mongoose.Schema;

var hospitalSchema=new Schema({
    hospital_name:{type: String, required: true},
    hospital_location:{type: String, required: true},
    hospital_rating:{type: Number, required: true},
    comments: {type: Array, required: true},
}, {
    timestamps:true, 

});

const hospital=mongoose.model('Hospital', hospitalSchema);
module.exports= hospital;

