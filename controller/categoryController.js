const express = require('express');
const bodyParser = require('body-parser');
const categorySchema = require('../model/categoryModel');


const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/createCategory',(req,res,next) => {
    var newCourse = new categorySchema(req.body);
    newCourse.save(function(err,rows){
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