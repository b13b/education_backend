const express = require('express');
const userSchema = require('../model/userModel');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/Courses');

router.post('/signup',(req,res,next) =>{
    var hash=bcrypt.hashSync(req.body["password"],saltRounds);
    var userJson={
        name:req.body.name,
        email:req.body.email,
        password:hash,
        usertype:req.body.usertype
    }
    var users=new userSchema(userJson)
    users.save(function(err,result){
        console.log('result');
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

router.post('/login',(req,res,next) =>{
    console.log("Entered Login ::",req.body);
    userSchema.findOne({name:req.body.name},function(err,result){
        console.log('result');
        if(err){
            res.status(500).json(err);
        }else if(result!=null){
            // if(req.body.password == result["password"]){
            console.log(bcrypt.compareSync(req.body.password,result["password"]));
            if(bcrypt.compareSync(req.body["password"],result["password"])){
                res.status(200).json({
                    status:"success",
                    data:result
                })
            }else {
                res.status(200).json({
                    status:"failure",
                    data:null
                })
            }
        }
    })
})

router.get('/',(req,res,next)=>{
    res.status(200).json({
        name:"Sneha"
    })
})

module.exports =router;