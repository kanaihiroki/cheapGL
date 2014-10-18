var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    mainBowerFiles = require('main-bower-files'),
    build = 'build';

function compileCoffee(path) {
    return gulp.src(path)
        .pipe($.sourcemaps.init())
        .pipe($.coffee())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(build));
}

gulp.task("clean", function() {
    return gulp.src(["public", "build"], {read: false})
        .pipe($.clean());
});

// gulp.task("polymer-components", function() {

//     return gulp.src("bower_components/core-ajax/**/*")
//         .pipe(gulp.dest("public/lib/core-ajax"));
// });

// gulp.task('bower', ["polymer-components"], function() {
//     return gulp.src(mainBowerFiles())
//         .pipe($.rename(function(path) {
//             console.log(path);
//             if (path.basename === "index") {
//                 path.basename = "console-polyfill";
//             }
//         })).pipe(gulp.dest("public/lib"));
// });

// gulp.task('bower', function() {
//     return gulp.src(["bower_components/**/*.js", "bower_components/**/*.html", "bower_components/**/*.js.map", "bower_components/**/*.css"])
//         .pipe(gulp.dest("public/lib"));
// });

gulp.task("ext", function () {
    return gulp.src("ext/js/*")
        .pipe(gulp.dest(build));
});

gulp.task("libs", ["ext"], function() {
});

gulp.task('coffee', function() {
    return compileCoffee('./src/coffee/**/*.coffee');
});

gulp.task('worker', function() {
    return gulp.src("src/worker/**/*.coffee")
        .pipe($.sourcemaps.init())
        .pipe($.coffee())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest("public/app"));
});

gulp.task("build-cheepgl", ["coffee", "worker", "libs"], function() {
    $.requirejs({
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
    // return gulp.src(['./example/asset/**/*.html', "./example/asset/**/*.js", "./example/asset/**/*.json"])
    return gulp.src(['./example/asset/**/*'])
        .pipe(gulp.dest("public/app"));
});

gulp.task("build-example", ["build-cheepgl", "compile-example", "copy-example-js"], function() {
    $.requirejs({
        name: "main",
        baseUrl: build,
        // mainConfigFile: "build/App.js",
        out: 'all.js'})
        .pipe(gulp.dest('public/app'));
});

gulp.task('connect', ["build-example", "copy-example-asset"],function(){
    return $.connect.server({
        root: ['public'],
        port: 8000,
        livereload: true
    });
});

gulp.task("example", ["connect"], function() {
    gulp.watch(["public/app/**/*"], function(file) {
        console.log(file.path);
        gulp.src(file.path)
            .pipe($.connect.reload());
    });

    gulp.watch(["src/**/*", "example/**/*"], ["build-example", "copy-example-asset"]);
});

gulp.task("default", ["build-cheepgl"], function() {
});
