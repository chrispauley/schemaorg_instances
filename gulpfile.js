var gulp = require('gulp');
var pug = require('gulp-pug');
var data = require('gulp-data');
var fm = require('front-matter');
var swig = require('gulp-swig');
var path = require('path');
var fs = require('fs');

gulp.task('default', function() {
  console.log('gulp default');
});

var myData = require('./data/Recipe/zucchini_bread.json');
// var myData2 = require('./data/Recipe/banana_bread.json');
// Object.assign(myData, myData2);
gulp.task('views', function buildHTML() {
  return gulp.src('src/templates/*.pug')
    .pipe(pug({pretty: true, data: myData}))
    .pipe(gulp.dest('build'))
});


gulp.task('pug:data', function() {
  return gulp.src('/data/**/*.json')
    .pipe(merge('data.json', function(json, file) {

      // Extract the filename and strip the extension
      var filename = path.basename(file.path),
        primaryKey = filename.replace(path.extname(filename), '');

      // Set the filename as the primary key for our JSON data
      var data = {};
      data[primaryKey.toUpperCase()] = json;

      return data;
    }))
    .pipe(gulp.dest('/temp'));
});
