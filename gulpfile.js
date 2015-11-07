var gulp = require('gulp');
var bower = require('gulp-bower');

var config = {
    bowerDir: 'bower_components/',
    distDir: {
        root: 'public/',
        js: 'public/js/',
        css: 'public/css/',
        fonts: 'public/fonts/',
        img: 'public/img/'
    },
    clientDir: 'client/'
};

gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest(config.bowerDir));
});

gulp.task('icons', ['bower'], function () {
    return gulp.src(config.bowerDir + 'font-awesome/fonts/**.*')
        .pipe(gulp.dest(config.distDir.fonts));
});

gulp.task('bootstrap', ['bower'], function () {
    return gulp.src(config.bowerDir + 'bootstrap/dist/**/*')
        .pipe(gulp.dest(config.distDir.root));
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
        .pipe(gulp.dest(config.distDir.root));
});

gulp.task('favicon.ico', function () {
    return gulp.src(config.clientDir + 'favicon.ico')
        .pipe(gulp.dest(config.distDir.root));
});

gulp.task('img', function () {
    return gulp.src(config.clientDir + 'img/*')
        .pipe(gulp.dest(config.distDir.img));
});

gulp.task('css', function () {
    return gulp.src(config.clientDir + 'css/*')
        .pipe(gulp.dest(config.distDir.css));
});

gulp.task('js', function () {
    return gulp.src(config.clientDir + 'js/*')
        .pipe(gulp.dest(config.distDir.js));
});

gulp.task('default', ['bower', 'icons', 'bootstrap', 'jquery', 'jquery.easing', 'index.html', 'favicon.ico', 'img', 'js', 'css']);
