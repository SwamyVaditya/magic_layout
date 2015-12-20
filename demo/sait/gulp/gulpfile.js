var gulp = require('gulp'),
htmlmin = require('gulp-html-minifier');

gulp.task('default', function () {
  gulp.src('../../dev/*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('../'))
});