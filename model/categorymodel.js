const mongoose=require('mongoose');

const categorySchema = mongoose.Schema({
    category:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    icon:{type:String,required:true}
});

module.exports=mongoose.model("category",categorySchema);