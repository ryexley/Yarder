
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var devPort = 3000;

mongoose.connect('mongodb://localhost/yarder');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || devPort);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('stylus').middleware(__dirname + '/public'));
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.options('/', routes.options);
app.get('/', routes.index);
app.get('/log/view', routes.logViewer);
app.post('/log/write', routes.logWrite);
app.get('/log/messages', routes.getDefaultLogMessages);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
