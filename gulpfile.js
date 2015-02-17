/**
 * Created by Andy.Lv on 2015/1/26.
 */
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var ngTemplate = require('gulp-ng-template');
var del = require('del');

var paths = {
    scripts: [
        //'public/libs/jquery/dist/jquery.min.js',
        //'public/angular/angular.min.js',
        //'public/angular-loading-bar/build/loading-bar.min.js',
        //'public/angular-ui-router/release/angular-ui-router.min.js',
        //'public/textAngular/dist/textAngular.min.js',
        //'public/bootstrap/dist/js/bootstrap.min.js',
        //'public/lodash/dist/lodash.min.js',
        //'public/ui-bootstrap-tpls.js',
        //'public/ng-message/ngMessage.js',
        'public/javascripts/app.js',
        'public/javascripts/platform/ng-web.js',
        'public/javascripts/platform/platform.js',
        'public/javascripts/platform/authentication.js',
        'public/javascripts/services/*.js',
        'public/javascripts/directive/*.js',
        'public/javascripts/controller/*.js'
    ],
    images: 'public/images/*',
    css: [
        'public/stylesheets/ng-web-media.css',
        'public/stylesheets/ng-web-style.css',
        'public/libs/textAngular/src/textAngular.css'
    ],
    ngTemplate: 'views/partial/*.html'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function (cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['build'], cb);
});

gulp.task('scripts', ['clean'], function () {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('ng-web.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/build/js'));
});

// Copy all static images
gulp.task('images', ['clean'], function () {
    return gulp.src(paths.images)
        // Pass in options to the task
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('public/build/img'));
});

gulp.task('minify-css', ['clean'], function () {
    gulp.src(paths.css)
        .pipe(minifyCSS())
        .pipe(concat('ng-web.min.css'))
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('ng-template', ['clean'], function () {
    return gulp.src(paths.ngTemplate)
        .pipe(minifyHtml({empty: true, quotes: true}))
        .pipe(ngTemplate({
            moduleName: 'ngWeb',
            filePath: 'ng/tpl.min.js'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/build/'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.css, ['images']);
    gulp.watch(paths.ngTemplate, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'minify-css', 'ng-template', 'watch']);
//gulp.task('default', ['watch', 'scripts', 'images']);