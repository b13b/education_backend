const mongoose=require('mongoose');

const cartSchema = mongoose.Schema({

    course:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    // courseID:{type:String,required:true},
    // userID:{type:String,required:true},

});

module.exports=mongoose.model("cart",cartSchema);