//jshint esversion:6
var data=require('./data.json');
const express = require('express');
const bodyParse = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(express.static("public"));
app.set('view engine' , 'ejs');
app.use(bodyParse.urlencoded({extended : true}));

app.get('/', function(req,res){
    res.render('home');
});

app.get('/login',function(req,res){
    res.render('login');
});
app.post('/login',function(req,res){
    res.render('secrets');
});

app.get('/register',function(req,res){
    res.render('register');
})
app.listen(3000,function(){
    console.log(".")
});