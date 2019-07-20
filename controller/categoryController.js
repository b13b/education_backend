const express = require('express');
const bodyParser = require('body-parser');
const categorySchema = require('../model/categoryModel');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/createCategory',(req,res,next) => {
    console.log(req.body);
    var newCategory = new categorySchema(req.body);
    newCategory.save(function(err,col){
        if(err){
            res.status(500).json({
                err:err
            })
        }else{
            res.status(200).json({
                status:"success",
                data:col
            })
        }
    })
})

router.get('/',(req,res,next) =>{
    categorySchema.find(function(err,col){

        if(err){
            res.status(500).json({
                err:err
            })
        }else{
            res.status(200).json({

                status:"success",
                data: col

            })
        }

    })
})

module.exports=router;