
var express = require('express');
var config = require('config');

var app = express();

// Information config
var rootFolder = config.get('rootFolder');
var rootFile = config.get('rootFile');
var rootFileOrigami = config.get('rootFileOrigami');
var host = config.get('server.host');
var port = config.get('server.port');

app.use(express.static(__dirname + rootFolder));

/**
 * Default
 */
app.get('/', function(req, res) {
  res.sendFile(rootFile);
});

/**
 * With user_id & app_id
 */
app.get('/:user/:app', function(req, res) { 
  let userId = parseInt(req.params.user);
  let appId = parseInt(req.params.app);
  res.sendFile(rootFileOrigami + '/' + userId + '/' + appId + '/index.html');
});

var server = app.listen(process.env.PORT || port, host, function(){
  console.log('Server is running on port', port);
});
