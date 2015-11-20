var gulp = require('gulp'),
htmlmin = require('gulp-html-minifier');


gulp.task('default', function () {
  gulp.src('../html/*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('../'))
});