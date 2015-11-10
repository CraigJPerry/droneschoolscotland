var gulp = require('gulp');
var del = require('del');
var bower = require('gulp-bower');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var exec = require('child_process').exec;

var config = {
    bowerDir: 'bower_components/',
    distDir: {
        root: 'dist/',
        staticRoot: 'dist/static/',
        js: 'dist/static/js/',
        css: 'dist/static/css/',
        fonts: 'dist/static/fonts/',
        img: 'dist/static/img/'
    },
    clientDir: 'client/',
    serverDir: 'server/'
};

gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest(config.bowerDir));
});

gulp.task('fontawesome-fonts', ['bower'], function () {
    return gulp.src(config.bowerDir + 'font-awesome/fonts/**.*')
        .pipe(gulp.dest(config.distDir.fonts));
});

gulp.task('fontawesome-css', ['bower'], function () {
    return gulp.src(config.bowerDir + 'font-awesome/css/**.*')
        .pipe(gulp.dest(config.distDir.css));
});

gulp.task('bootstrap', ['bower'], function () {
    return gulp.src(config.bowerDir + 'bootstrap/dist/**/*')
        .pipe(gulp.dest(config.distDir.staticRoot));
});

gulp.task('jquery', ['bower'], function () {
    return gulp.src(config.bowerDir + 'jquery/dist/**.*')
        .pipe(gulp.dest(config.distDir.js));
});

gulp.task('jquery.easing', ['bower'], function () {
    return gulp.src(config.bowerDir + 'jquery.easing/js/**.*')
        .pipe(gulp.dest(config.distDir.js));
});

gulp.task('index.html', function () {
    return gulp.src(config.clientDir + 'index.html')
        .pipe(gulp.dest(config.distDir.staticRoot));
});

gulp.task('favicon.ico', function () {
    return gulp.src(config.clientDir + 'favicon.ico')
        .pipe(gulp.dest(config.distDir.staticRoot));
});

gulp.task('img', function () {
    return gulp.src(config.clientDir + 'img/*')
        .pipe(gulp.dest(config.distDir.img));
});

gulp.task('css', function () {
    return gulp.src(config.clientDir + 'less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.distDir.css));
});

gulp.task('js', function () {
    return gulp.src(config.clientDir + 'js/*')
        .pipe(gulp.dest(config.distDir.js));
});

gulp.task('app.yaml', function () {
    // TODO: Inject version number, prefix with test- if not on the git master branch so a test version can be deployed
    return gulp.src(config.serverDir + 'app.yaml')
        .pipe(gulp.dest(config.distDir.root));
});

gulp.task('clean', function () {
    return del([
        'dist/**/*',
        '!dist/.gitkeep'
    ])
});

// TODO: Version bump, git tag creation

gulp.task('push', function (cb) {
    exec('appcfg.py -A droneschoolscotland update dist/', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('default', ['bower', 'fontawesome-fonts', 'fontawesome-css', 'bootstrap', 'jquery', 'jquery.easing', 'index.html', 'favicon.ico', 'img', 'js', 'css', 'app.yaml']);
