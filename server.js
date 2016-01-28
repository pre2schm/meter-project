var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var str2json = require('string-to-json');

var app = express();
var PORT = process.env.PORT || 3000;




//app.use(bodyParser.urlencoded());
//app.use(bodyParser.raw());
//app.use(bodyParser.json());
app.use(bodyParser.text());

var log = [];

app.post('/api', function (req,res) {
  
  //var body = str2json.convert(req.body);
  var body = (req.body);
  log.push(body);
  console.log('logging!');
  return res.sendStatus(200).send();
});


app.get('/', function(req, res) {
    res.send(log);
});

app.listen(PORT, function(){
  console.log('Express listening on port ' + PORT + '!');
});

