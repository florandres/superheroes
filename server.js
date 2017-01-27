var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.listen(3030, function (){
console.log("Conectado al puerto 3030");
});

app.get('/',function(req,res){
	res.sendFile(__dirname + '/angular/index.html');
});
