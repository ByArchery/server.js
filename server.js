console.log("hola");

var express = require("express");
var app = express();

app.get ("/", function(req,res){
    res.send("Gamboa se la come con pimientos");
});

app.get ("/hola", function(req,res){
    res.send("Gamboa se la sigue comiendo con pimientos");
});

app.listen(3000, function(){
    console.log("funcione!!")
});

