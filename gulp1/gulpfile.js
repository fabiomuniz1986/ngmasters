////////// requires
var gulp = require('gulp');
var debug = require('gulp-debug');
var concat = require('gulp-concat');
var uglifyjs = require('gulp-uglifyjs');
var ngmin = require('gulp-ngmin');

////////// code location
var app = {
    js: [
        '../js/base.js',
        '../js/ajax.js',
        '../js/github_api2.js',
        '../js/githubmodel.js',
        '../js/components/gh_*/**/*.js',
        '../js/components/popup.js',
    ],
};

////////// Tasks

gulp.task('concat', function() {
    return gulp.src(app.js)
        .pipe(debug())
        .pipe(concat('myapp.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('minify', ['concat'], function() {
    return gulp.src('build/myapp.js')
        .pipe(debug())
        // .pipe(ngmin())
        .pipe(uglifyjs('myapp.min.js'))
        .pipe(gulp.dest('build/'));
});
