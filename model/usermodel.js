const mongoose=require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    loginID:{type:String,required:true},
    password:{type:String,required:true},
    userType:{type:String,required:true},
    createdOn:{type:Date,default:new Date()}
});
module.exports=mongoose.model("users",userSchema);