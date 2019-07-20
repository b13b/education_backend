const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const authController=require('../controller/authController');
const courseController=require('../controller/courseController');
const categoryController=require('../controller/categoryController');
const cartController=require('../controller/cartController');
const paymentController=require('../controller/paymentController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use('/auth',authController);
app.use('/course',courseController);
app.use('/category',categoryController);
app.use('/cart',cartController);
app.use('/payment',paymentController);
app.get('/',(req,res,next )=>{
    res.status(200).json("Hi there!");
  })
  
module.exports = app;