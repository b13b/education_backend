const express = require('express');
const bodyParser = require('body-parser');
const cartSchema = require('../model/cartModel');
const router = express.Router();
//const mongoose = require('mongoose');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/createCart',(req,res,next) => {
    var newCart = new cartSchema(req.body);
    newCart.save(function(err,cart){
        console.log(err);
        if(err){
            res.status(500).json({
                err:err
            })
        }else{
            res.status(200).json({
                status:"success",
                data:cart
            })
        }
    })
})

router.get('/',(req,res,next) =>{
    cartSchema.find(function(err,cart){

        if(err){
            res.status(500).json({
                err:err
            })
        }else{
            res.status(200).json({

                status:"success",
                data: cart
            })
        }

    })
})

module.exports=router;