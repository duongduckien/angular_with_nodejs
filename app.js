
var express = require('express');
var config = require('config');

var app = express();

// Information config
var rootFolder = config.get('rootFolder');
var rootFile = config.get('rootFile');
var host = config.get('server.host');
var port = config.get('server.port');

app.use(express.static(__dirname + rootFolder));
app.get('/*', function(req, res) {
  res.sendFile(rootFile);
});

var server = app.listen(process.env.PORT || port, host, function(){
  console.log('Server is running on port', port);
});
