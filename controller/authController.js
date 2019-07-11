const express = require('express');
const bodyParser = require('body-parser');
const usersSchema = require('../model/usermodel');


const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://bhumica:bYXT7pYBR8Qx5HcA@bhumica-ryhdp.mongodb.net/test?retryWrites=true/SITHotel');

router.post('/signup',(req,res,next) =>{
    var users=new courseSchema(req.body)
    users.save(function(err,result){
        console.log(result);

        if(err){
            res.status(500).json(err);
        }else{
            res.status(200).json({
                status:"success",
                data:result
            })
        }
    })
})
router.post('/login',(req,res,next) => {

    usersSchema.findOne({loginID:req.body.loginID},function(err,result){
        if(err){
            res.status(500).json(err);

        }else{
            if(req.body.password == result["password"]){
                res.status(200).json({
                    status:"success",
                    data:result
                })

            }else{

                res.status(200).json({
                    status:"failure",
                    data:null
                })

            }
        }
        

    })

});
router.get('/',(req,res,next)=>{
    res.status(200).json("auth");
})
module.exports = router;