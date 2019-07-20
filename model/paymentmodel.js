const mongoose=require('mongoose');

const paymentSchema=mongoose.Schema({ 
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    zip:{type:Number,required:true},
    cardname:{type:String,required:true},
    cardnumber:{type:String,required:true},
    expmonth:{type:Number,required:true},
    expyear:{type:Number,required:true},
    cvv:{type:Number,required:true},
});

module.exports=mongoose.model("payment",paymentSchema);