let plumber   = require('gulp-plumber'),
    babel     = require('gulp-babel'),
    webpack   = require('webpack-stream'),
    uglify    = require('gulp-uglify'),
    concat    = require('gulp-concat'),
    scriptsPATH = {
      "input": "./src/js/",
      "output": "./build/js/"
    };

module.exports = function() {
  $.gulp.task('js:dev', () => {
    return $.gulp.src(scriptsPATH.input + '*.js')
      .pipe(plumber())
      .pipe(webpack({
        mode: 'production',
      }))
      .pipe(babel({
        presets: [ '@babel/env' ]
      }))
      .pipe(concat('app.js'))
      .pipe($.gulp.dest(scriptsPATH.output))
      .pipe($.browserSync.stream());
  });

  $.gulp.task('js:build', () => {
    return $.gulp.src(scriptsPATH.input + '*.js')
      .pipe(plumber())
      .pipe(webpack({
        mode: 'production',
      }))
      .pipe(babel({
        presets: [ '@babel/env' ]
      }))
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe($.gulp.dest(scriptsPATH.output))
      .pipe($.browserSync.stream());
  });
};
