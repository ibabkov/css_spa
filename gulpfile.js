const gulp = require('gulp');
const pagebuilder = require('gulp-pagebuilder');

gulp.task('default', function () {
  return gulp.src('index.html')
    .pipe(pagebuilder('src/components'))
    .pipe(gulp.dest('dist/'));
});