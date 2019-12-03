var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass:watch', function () {
    return gulp.watch('./scss/**/*.scss', gulp.parallel('sass', async function () {
    }));
});

gulp.task('default', gulp.series('sass', 'sass:watch', async function () {
}));
