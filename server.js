var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var str2json = require('string-to-json');

var app = express();
var PORT = process.env.PORT || 3000;




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.text());


app.post('/api', function (req,res) {
  
  var body = str2json.convert(req.body);
  console.log(body);
  return res.sendStatus(200).send();
});


app.listen(PORT, function(){
  console.log('Express listening on port ' + PORT + '!');
});

