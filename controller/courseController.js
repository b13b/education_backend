const express = require('express');
const bodyParser = require('body-parser');
const courseSchema = require('../model/courseModel');


const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
//const mongoose = require('mongoose');


router.post('/createCourse',(req,res,next) => {
    var newCourse = new courseSchema(req.body);
    newCourse.save(function(err,rows){
        console.log(err)
        if(err){
            res.status(500).json({
                err:err
            })
        }else{
            res.status(200).json({
                status:"success",
                data:rows
            })
        }


    })
});

router.get('/',(req,res,next) =>{
    courseSchema.find(function(err,rows){

        if(err){
            res.status(500).json({
                err:err
            })
        }else{
            res.status(200).json({

                status:"success",
                data: rows

            })
        }

    })
})
module.exports=router;