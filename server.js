var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();



app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"));
 
var port = 3000;

app.listen(process.env.PORT || port);

console.log('Server now listening on port ' + port);

module.exports = app;
