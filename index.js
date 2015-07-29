var express = require('express');
var httpProxy = require('http-proxy');
var bodyParser = require('body-parser');

var apiForwardingUrl = 'http://api.open-notify.org/astros.json?';

var server = express();
server.set('port', 3000);
server.use(express.static(__dirname + '/app'));

var apiProxy = httpProxy.createProxyServer();

console.log('Forwarding API requests to ' + apiForwardingUrl);

server.all("/space/*", function(req, res) {
    apiProxy.web(req, res, {target: apiForwardingUrl});
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});