'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require("gulp-watch");

// sass.compiler = require('node-sass');

gulp.task('sass-compile', () => {
    return gulp.src('src/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', () => {
    gulp.watch('src/*.sass', gulp.series('sass-compile'));
});

gulp.task('sass', function () {
    return gulp.src('src/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/assets/css'));
});

// gulp.task("sass:watch", () => watchSass([
//     "./src/**/*.{scss,css}",
//     "!./src/libs/**/*"
// ])
//     .pipe(sass())
//     .pipe(gulp.dest("./dist")));

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

// exports.default = defaultTask
