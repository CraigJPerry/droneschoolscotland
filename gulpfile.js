var gulp = require('gulp');
var bower = require('gulp-bower');

var config = {
    bowerDir: 'bower_components/',
    distDir: {
        root: 'public/',
        js: 'public/js',
        fonts: 'public/fonts',
    }
};

gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('icons', ['bower'], function () {
    return gulp.src(config.bowerDir + 'font-awesome/fonts/**.*')
        .pipe(gulp.dest(config.distDir.fonts))
});

gulp.task('bootstrap', ['bower'], function () {
    return gulp.src(config.bowerDir + 'bootstrap/dist/**/*')
        .pipe(gulp.dest(config.distDir.root))
});

gulp.task('jquery', ['bower'], function () {
    return gulp.src(config.bowerDir + 'jquery/dist/**.*')
        .pipe(gulp.dest(config.distDir.js))
});

gulp.task('jquery.easing', ['bower'], function () {
    return gulp.src(config.bowerDir + 'jquery.easing/js/**.*')
        .pipe(gulp.dest(config.distDir.js))
});

gulp.task('default', ['bower', 'icons', 'bootstrap', 'jquery', 'jquery.easing']);
