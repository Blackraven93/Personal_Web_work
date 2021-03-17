// gulpfile.js
let gulp = require('gulp');
let sass = require('gulp-sass');

// 일반 컴파일
gulp.task('sass', function () {
    return gulp.src('style.sass') // 입력 경로
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style.css')); // 출력 경로
});

// 런타임 중 파일 감시
gulp.task('sass:watch', function () {
    gulp.watch('style.sass', ['sass']);
});