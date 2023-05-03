var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xangelajuarez:testtesttest@cluster0.igez0vt.mongodb.net/signs?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})
var app=express()

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
   extended: true
}));

app.post('/sign-here', function(req,res){
   var name = req.body.name;
   var message =req.body.message;


   var data = {
      "name": name,
      "message": message,

   }
   db.collection('details').insertOne(data,function(err, collection){
   if (err) throw err;
      console.log("Record inserted Successfully");
   });
})

app.get('./xx4evrfift33nxx.html',function(req,res){
   res.set({
      'Access-control-Allow-Origin': '*'
   });
   return res.redirect('index.html');
}).listen(443)

console.log("server listening at port 443");