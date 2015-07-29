/**
 * Module dependencies.
 */
var express = require('express');
var https = require('https');
var path = require('path');
var fs = require('fs');

var apiForwardingUrl = 'http://api.open-notify.org/astros.json?';


var httpProxy = require('http-proxy');
//Solution for forwarding from http to https taken from
//http://stackoverflow.com/questions/15801014/how-to-use-node-http-proxy-for-http-to-https-routing
var proxyOptions = {
    changeOrigin: true
};

httpProxy.prototype.onError = function (err) {
    console.log(err);
};

var apiProxy = httpProxy.createProxyServer(proxyOptions);

// Node express server setup.
var server = express();
server.set('port', 3000);
server.use(express.static(__dirname + '/app'));

console.log('Forwarding API requests to ' + apiForwardingUrl);

server.all("/space/*", function(req, res) {
    console.log("Ye");
    apiProxy.web(req, res, {target: apiForwardingUrl});
});

var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

// Start Server.
server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});