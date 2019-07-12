const mongoose=require('mongoose');

const courseSchema = mongoose.Schema({
    course:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    
    
});
module.exports=mongoose.model("course",courseSchema);