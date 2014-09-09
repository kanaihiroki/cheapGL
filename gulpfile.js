var gulp = require('gulp'),
    connect = require("gulp-connect"),
    bower = require('main-bower-files'),
    clean = require("gulp-clean"),
    coffee = require("gulp-coffee"),
    sourcemaps = require('gulp-sourcemaps'),
    rjs = require('gulp-requirejs'),
	build = 'build';

function compileCoffee(path) {
    return gulp.src(path)
        .pipe(sourcemaps.init())
        .pipe(coffee())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(build));
}

gulp.task("clean", function() {
    return gulp.src(["public", "build"], {read: false})
        .pipe(clean());
});

gulp.task('bower', function() {
    return gulp.src(["bower_components/**/*.js", "bower_components/**/*.html", "bower_components/**/*.js.map", "bower_components/**/*.css"])
        .pipe(gulp.dest("public/lib"));
});

gulp.task("ext", function () {
    return gulp.src("ext/js/*")
        .pipe(gulp.dest(build));
});

gulp.task("libs", ["bower", "ext"], function() {
});

gulp.task('coffee', function() {
	return compileCoffee('./src/coffee/**/*.coffee');
});

gulp.task('worker', function() {
    return gulp.src("src/worker/**/*.coffee")
        .pipe(sourcemaps.init())
        .pipe(coffee())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("public"));
});

gulp.task("build-cheepgl", ["coffee", "worker", "libs"], function() {
    rjs({
		name: "gl",
        baseUrl: build,
		// mainConfigFile: "build/App.js",
        out: 'cheepgl.js'})
		.pipe(gulp.dest('./build'));
});

gulp.task("compile-example", [], function() {
	return compileCoffee('./example/src/coffee/**/*.coffee');
});

gulp.task("copy-example-js", function() {
	return gulp.src('./example/src/js/**/*.js')
		.pipe(gulp.dest(build));
});

gulp.task("copy-example-asset", function() {
	gulp.src(['./example/asset/**/*.html', "./example/asset/**/*.js", "./example/asset/**/*.json"])
		.pipe(gulp.dest("public"));
});

gulp.task("build-example", ["build-cheepgl", "compile-example", "copy-example-js"], function() {
    rjs({
		name: "main",
        baseUrl: build,
		// mainConfigFile: "build/App.js",
        out: 'all.js'})
		.pipe(gulp.dest('public'));
});

gulp.task('connect', ["build-example", "copy-example-asset"],function(){
    return connect.server({
        root: ['public/'],
        port: 8000,
        livereload: true
    });
});

gulp.task("reload", ["build-example", "copy-example-asset"], function() {
    gulp.src("public/**/*")
        .pipe(connect.reload());
});

gulp.task("example", ["connect"], function() {
    return gulp.watch(["src/**/*", "example/**/*"], ["reload"]);
});

gulp.task("default", ["build-cheepgl"], function() {
});
