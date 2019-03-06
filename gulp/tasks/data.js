module.exports = function () {
  $.gulp.task('data', function () {
    return $.gulp.src('src/data/*.json')
      .pipe($.gulp.dest('./build/data'));
  })
};