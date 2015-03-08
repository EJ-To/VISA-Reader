var express = require('express'),
	bodyParser = require("body-parser"),
	fs = require("fs"),
	multer = require("multer"),
	app = express();

var connectAssets = require('connect-assets');
var path = require('path');

var	port = process.env.PORT || 8888;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // render engine

app.use(connectAssets({
  paths: [path.join(__dirname, 'public/css'), path.join(__dirname, 'public/js')]
}));

app.use('/', require('./controllers/static'));


var server = app.listen(port, function() {
	console.log("listening on localhost:" + port);
});
