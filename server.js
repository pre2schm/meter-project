var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req,res){
  res.sendfile("index.html");
});
app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});

app.post('/api',function(req,res){
	//res.send(req.params.id);
	var body = req.body
  	//res.send('Got a POST request');
});

app.listen(PORT,function(){
  console.log("Started on PORT 3000");
});

// app.get('/output', function(req,res){
// 	res.send(out);
// });