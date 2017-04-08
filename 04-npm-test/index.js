var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendfile('index.html')
});

var port = 4000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });
