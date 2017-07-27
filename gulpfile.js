var gulp = require('gulp');
var pug = require('gulp-pug');
var data = require('gulp-data');
var fm = require('front-matter');
var swig = require('gulp-swig');
var path = require('path');
var fs = require('fs');
var merge = require('gulp-merge-json');
var rename = require('gulp-rename');
var foreach = require('gulp-foreach');

gulp.task('default', function() {
  console.log('gulp default');
});

// var myData = require('./data/Recipe/zucchini_bread.json');
// var myData2 = require('./data/Recipe/banana_bread.json');
// Object.assign(myData, myData2);
// gulp.task('views', function docsHTML() {
//   return gulp.src('src/templates/*.pug')
//     .pipe(pug({pretty: true, data: myData}))
//     .pipe(gulp.dest('docs'))
// });

gulp.task('pug:recipe', function docsHTML() {
  var myData = require('./data/Recipe/zucchini_bread.json');
  return gulp.src('src/templates/recipe.pug')
    .pipe(pug({
      pretty: true, data: myData
    }))
    .pipe(rename({
      basename: "zucchini_bread",
      extname: ".html"
    }))
    .pipe(gulp.dest('docs'))
});

var getJsonData = function(file) {
  return require(file.path);
};

//https://stackoverflow.com/questions/28921317/how-to-produce-multiple-html-files-from-a-single-jade-template-with-gulp-and-gul
gulp.task('pug:Recipe', function() {
  return gulp.src('data/Recipe/*.json')
    .pipe(foreach(function(stream, file){
        var jsonFile = file; // We create this 'jsonFile' variable because the 'file' variable is overwritten on the next gulp.src.
        var jsonBasename = path.basename(jsonFile.path, path.extname(jsonFile.path));
        var jsonData = getJsonData(file);
        var data = {};
        data[jsonBasename] = jsonData;
        // Object.assign(data, jsonData)
        console.log("[" +jsonBasename, "] current data is: ", data[jsonBasename]);
        return gulp.src('src/templates/recipe.pug')
          // .pipe(data(getJsonData(jsonFile)))
          .pipe(pug({pretty: true, data: data[jsonBasename]}))
          .pipe(swig())
          .pipe(rename(function(htmlFile) {
            htmlFile.basename = jsonBasename;
          }))
          .pipe(gulp.dest('docs'))
      })
    )
});

gulp.task('pug:LocalBusiness', function() {
  return gulp.src('data/LocalBusiness/*.json')
    .pipe(foreach(function(stream, file){
        var jsonFile = file; // We create this 'jsonFile' variable because the 'file' variable is overwritten on the next gulp.src.
        var jsonBasename = path.basename(jsonFile.path, path.extname(jsonFile.path));
        var jsonData = getJsonData(file);
        var data = {};
        data[jsonBasename] = jsonData;
        // Object.assign(data, jsonData)
        console.log("[" +jsonBasename, "] current data is: ", data[jsonBasename]);
        return gulp.src('src/templates/localbusiness.pug')
          // .pipe(data(getJsonData(jsonFile)))
          .pipe(pug({pretty: true, data: data[jsonBasename]}))
          .pipe(swig())
          .pipe(rename(function(htmlFile) {
            htmlFile.basename = jsonBasename;
          }))
          .pipe(gulp.dest('docs'))
      })
    )
});

// https://tusharghate.com/rendering-pug-templates-with-multiple-data-files
// Causes a deep merge into one combined json file.
gulp.task('pug:combined', function() {
  return gulp.src('data/**/*.json')
    .pipe(merge({
       fileName: 'combined.json'
  }))
    .pipe(gulp.dest('temp'));
});


// Static Pages
gulp.task('pug:static-pages', function() {
  return gulp.src(['src/templates/index.pug', 'src/templates/about.pug'])
    .pipe(pug({ pretty:true }))
    .pipe(gulp.dest('docs'));
});
