"use strict";

/************************
 * SETUP
 ************************/

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var globbing = require('gulp-css-globbing');

/************************
 * CONFIGURATION
 ************************/

var autoReload = true;

/************************
 * TASKS
 ************************/

gulp.task('styles', function() {
  gulp.src('scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(globbing({extensions: ['.scss']}))
      .pipe(sass({outputStyle: 'expanded'}))
      // Catch any SCSS errors and prevent them from crashing gulp
      .on('error', function (error) {
        console.error(error);
        this.emit('end');
      })
      .pipe(autoprefixer('last 5 versions'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('css/'))
      .pipe(livereload());
});


gulp.task('watch',['styles'], function() {
  if (autoReload) {
    livereload.listen();
  }
  gulp.watch('scss/**/*.scss', ['styles']);
});
