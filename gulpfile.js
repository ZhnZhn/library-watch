'use strict';

const gulp = require('gulp')
, del = require('del')
, concat = require('gulp-concat')
, cleanCss = require('gulp-clean-css')
, rev = require('gulp-rev')
, replace = require('gulp-replace')
, rename = require('gulp-rename')
, fs = require('node:fs');

gulp.task('clean', function cleanImpl(){
  return del(['./css/*.min.css']);
})

gulp.task('styles', gulp.series('clean', function stylesImpl(){
  return gulp.src(['./css/*.css', '!./css/*.min.css'])
   .pipe(concat('app.min.css'))
   .pipe(cleanCss())
   .pipe(rev())
   .pipe(gulp.dest('./css'))
}));

const _isMinCssFileName = name =>
   name.indexOf('.min.css') !== -1;
const _getCssMinFileName = () => fs
   .readdirSync('./css')
   .filter(_isMinCssFileName)[0];
const _crCssMinLink = fileName => 
   `<link rel="stylesheet" href="css/${fileName}">`;
const _crCssLink = () => _crCssMinLink(_getCssMinFileName());


gulp.task('template', gulp.series('styles', function templateImpl(){  
  return gulp.src('./template/gulp.ejs')
    .pipe(replace('<!-- REPLACE_BY_CSS_MIN_LINK -->', _crCssLink()))
    .pipe(rename('index.ejs'))
    .pipe(gulp.dest('./template'));
}))

gulp.task('default', gulp.series('template'));
