var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

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

app.post('/api/:id',function(req,res){
	//res.send(req.params.id);
	console.log(req.params.id);
	res.status(200).send();
  	//res.send('Got a POST request');
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})