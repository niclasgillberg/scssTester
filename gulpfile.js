var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['css'], function() {
    return gulp.watch('style.scss', ['css']);
});