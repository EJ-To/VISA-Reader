var gulp     = require('gulp'),
  concat     = require('gulp-concat'),
  prefix     = require('gulp-autoprefixer'),
  jade       = require('gulp-jade'),
  jshint     = require('gulp-jshint'),
  livereload = require('gulp-livereload'),
  stylus     = require('gulp-stylus'),
  uglify     = require('gulp-uglify'),
  gutil      = require('gulp-util'),
  watch      = require('gulp-watch');


gulp.task('test', function() {
  console.log('hello world')
});

gulp.task('default', ['test']);
