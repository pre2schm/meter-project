var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
var PORT = process.env.PORT || 3000;
var todos =[]
var todoNextId = 1;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.text());


app.post('/api', function (req,res) {
  
  var body = req.body;
  console.log(body);
  return res.sendStatus(200).send();
});

// app.get('/todos/:id', function (req,res) {
//   var todoId = parseInt(req.params.id,10);

//   console.log(todoId)
//   if(todoId > todos.length) {
//     res.status(404).send();
//   } else {
//     for (var i = 0; i < todos.length; i++){
//       if(todoId === todos[i].id) {
//         res.json(todos[i]);
//       }
//     }
//   }
  
  //res.send('Asking for todo with id of ' + req.params.id);
//});

// app.post('/api', function (req,res){
  
//   var body = req.body;
//   //var object = body;

//   todos.push(body);
//   console.log(body);
//   //console.log(todos);
  
//   //console.log('description: ' + body.description);
//   //console.log(todos.length);
//   //res.status(200).send();
//   //res.json(body);
//   res.text(body);
// });

app.listen(PORT, function(){
  console.log('Express listening on port ' + PORT + '!');
});

// var express        =         require("express");
// var bodyParser     =         require("body-parser");
// var app            =         express();
// var PORT = process.env.PORT || 3000;
// var body2;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.get('/', function (req,res){
//   res.sendfile("index.html");
// });


// app.post('/login',function(req,res){
//   var user_name=req.body.user;
//   var password=req.body.password;
//   console.log("User name = "+user_name+", password is "+password);
//   res.end("yes");
// });

// app.post('/api',function(req,res){
// 	//res.send(req.params.id);
// 	var body = req.body
//   body2 = body.description;
//   	//res.send('Got a POST request');
// });

// app.listen(PORT,function(){
//   console.log("Started on PORT 3000");
// });

// // app.get('/output', function(req,res){
// // 	res.send(out);
// // });

// app.get('/about', function(req, res){
//   res.send(body2);
// });