global.$ = {
  path: {
    task: require('./gulp/path/tasks.js')
  },
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'pug',
    'fonts',
    'styles:dev',
    'img:dev',
    'data',
    'js:dev',
    'svg'
  )
));

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'pug',
    'fonts',
    'styles:build',
    'img:build',
    'data',
    'js:build',
    'svg'
  )
));
$.gulp.task('default', $.gulp.series(
  'dev',
  $.gulp.parallel(
    'watch',
    'serve'
  )
));