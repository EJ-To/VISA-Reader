var express  = require('express'),
  bodyParser = require('body-parser'),
  stylus     = require('stylus'),
  boostrap   = require('bootstrap-styl'),
  fs         = require('fs'),
  multer     = require('multer'),
  gutil      = require('gulp-util'),
  path       = require('path'),
  app        = express();


var port = process.env.PORT || 8888;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // render engine

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(boostrap());
}
app.use(stylus.middleware({
  src: __dirname + '/public/css',
  compile: compile
}));

app.use(express.static(__dirname + '/public'));
app.use('/api/upload', require('./controllers/api/upload'));
app.use('/', require('./controllers/static'));



var server = app.listen(port, function() {
  gutil.log(gutil.colors.green("Server started on localhost:" + port));
});
