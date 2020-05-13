//jshint esversion:6
const express = require("express");
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req,res){
    
  res.sendFile(__dirname + "/index.html");
  
});

app.post("/" , function(req,res){

   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);

   var result = num1 + num2;

   res.send("O resultado da soma de " + num1 +  " com " + num2 + " é " + result);

});

app.get("/bmi", function(req,res){
    
  res.sendFile(__dirname + "/bmiCalculator.html");
  
});

app.post("/bmi", function(req,res){
    
  var weight = parseFloat(req.body.peso);
  var height = parseFloat(req.body.altura);

  var result = weight / (height * height);

  res.send("O teu BMI é " + result);
  
});



app.listen(port, function(){
    console.log("Server port: " + port);
    
});