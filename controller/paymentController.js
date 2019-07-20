const express = require('express');
const bodyParser = require('body-parser');
const paymentSchema = require('../model/paymentModel');
const router = express.Router();
//const mongoose = require('mongoose');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/makePayment',(req,res,next) => {
    var newPayment = new paymentSchema(req.body);
    newPayment.save(function(err,payment){
        console.log(err);
        if(err){
            res.status(500).json({
                err:err
            })
        }else{
            res.status(200).json({
                status:"success",
                data:payment
            })
        }
    })
})

router.get('/',(req,res,next) =>{
    paymentSchema.find(function(err,payment){

        if(err){
            res.status(500).json({
                err:err
            })
        }else{
            res.status(200).json({

                status:"success",
                data:payment
            })
        }

    })
})

module.exports=router;