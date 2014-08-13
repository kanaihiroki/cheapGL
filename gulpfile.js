var gulp = require('gulp'),
    connect = require("gulp-connect"),
    bower = require('main-bower-files'),
    clean = require("gulp-clean"),
    coffee = require("gulp-coffee"),
    sourcemaps = require('gulp-sourcemaps');

var lib_dir = "public/js/lib";

gulp.task("clean", function() {
    return gulp.src("public/js/**/*", {read: false})
        .pipe(clean());
});

gulp.task('connect', ["build"],function(){
    connect.server({
        root: ['public/'],
        port: 8000,
        livereload: true
    });
});

gulp.task('bower', function() {
    return gulp.src(bower())
        .pipe(gulp.dest(lib_dir));
});

gulp.task("ext", function () {
    return gulp.src("ext/js/*")
        .pipe(gulp.dest(lib_dir));
});

gulp.task("libs", ["bower", "ext"], function() {
});

gulp.task('coffee', function() {
    gulp.src('./src/coffee/*.coffee')
        .pipe(sourcemaps.init())
        .pipe(coffee())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/js/'))
});

gulp.task("build", ["coffee"], function() {
});

gulp.task("default", ["connect"], function() {
    gulp.watch("src/**/*.js", ["build"]);
});
