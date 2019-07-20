const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    usertype:{type:String,required:true},
    createdOn:{type:Date,default:new Date()}
});

module.exports=mongoose.model("users",userSchema);