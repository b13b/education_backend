const mongoose=require('mongoose');

const courseSchema = mongoose.Schema({
    category:{type:String,required:true},
});

module.exports=mongoose.model("course",courseSchema);