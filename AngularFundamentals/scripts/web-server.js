var express = require('express');
var path = require('path');
var events = require('./eventsController');
var app = express();
// var rootPath = path.normalize(__dirName + '/../');
var rootPath = path.normalize('E:\Research\DemoApp');

app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

app.listen(8001);
console.log('Listening on port 8000...'); 