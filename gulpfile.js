var gulp = require('gulp'),
    connect = require("gulp-connect"),
    bower = require('main-bower-files'),
    clean = require("gulp-clean"),
    coffee = require("gulp-coffee"),
    sourcemaps = require('gulp-sourcemaps'),
	jsDir = './public/js/';


gulp.task("clean", function() {
    return gulp.src("public/js/**/*", {read: false})
        .pipe(clean());
});

gulp.task('bower', function() {
    return gulp.src(bower())
        .pipe(gulp.dest(jsDir));
});

gulp.task("ext", function () {
    return gulp.src("ext/js/*")
        .pipe(gulp.dest(jsDir));
});

gulp.task("libs", ["bower", "ext"], function() {
});

gulp.task('coffee', function() {
    gulp.src('./src/coffee/**/*.coffee')
        .pipe(sourcemaps.init())
        .pipe(coffee())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsDir));
});

gulp.task("build", ["coffee", "libs"], function() {
});

gulp.task('connect', ["build"],function(){
    connect.server({
        root: ['public/'],
        port: 8000,
        livereload: true
    });
});

gulp.task("reload", ["build"], function() {
    gulp.src("public/**/*")
        .pipe(connect.reload());
});

gulp.task("default", ["connect"], function() {
    gulp.watch("src/**/*", ["reload"]);
});
