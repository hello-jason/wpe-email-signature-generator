'use strict';

// Setup variables
var gulp         = require('gulp'); // core gulp
var sass         = require('gulp-sass'); // Compile scss files
var csso         = require('gulp-csso'); // minify css
var gzip         = require('gulp-gzip'); // gzip compression
var connect      = require('gulp-connect'); // web server
var autoprefixer = require('gulp-autoprefixer');
var watch        = require('gulp-watch');
var rm           = require( 'gulp-rm' )
var runSequence  = require('run-sequence');

//
// Web server
//
gulp.task('connect', function() {
  connect.server({
    name: 'Email Signature',
    root: './',
    port: '8001',
    livereload: true
  });
});

//
// Clean dist directory
//
gulp.task( 'clean:dist', function() {
  return gulp.src( './dist/**/*', { read: false })
    .pipe( rm() )
});

//
// Copy index.html
//
gulp.task('copy-html', function() {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
});

//
// Copy javascript
//
gulp.task('copy-js', function() {
  gulp.src('./src/javascript/main.js')
    .pipe(gulp.dest('./dist/js'));
});

//
// Copy images
//
gulp.task('copy-images', function() {
  gulp.src('./src/images/**/*.*')
    .pipe(gulp.dest('./dist/images'));
});

//
// Build css
//
// Compile scss files
gulp.task('sass', function() {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// Autoprefixer
gulp.task('autoprefixer', function() {
  gulp.src('./dist/css/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css'))
});

// Minify compiled CSS
gulp.task('minify', function() {
  return gulp.src('./dist/css/**/*.css')
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'))
});

// Gzip compiled CSS
gulp.task('gzip', function() {
  return gulp.src('./dist/css/**/*.css')
    .pipe(gzip())
    .pipe(gulp.dest('./dist/css'));
});

// Move files
gulp.task('copyfonts', function() {
   gulp.src('./node_modules/font-awesome/fonts/**/*.{eot,svg,ttf,woff,woff2}')
   .pipe(gulp.dest('./dist/fonts'));
});

//
// Master build task
// Compilies stylesheets for production
gulp.task('build', function() {
  runSequence('clean:dist', 'copy-html', 'copy-images', 'copy-js', 'sass','autoprefixer', 'minify', 'gzip', 'copyfonts');
});

//
// Watch task
// Spins up a server, watches for scss changes,
// rebuilds stylesheets and reloads server on change
//
gulp.task('watch', function() {
  gulp.start('connect');
  watch('./src/**/*.*', function() {
    gulp.start('build');
  });
});