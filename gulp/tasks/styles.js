let plumber       = require('gulp-plumber'),
    scss          = require('gulp-sass'),
    postcss       = require('gulp-postcss'),
    csso          = require('postcss-csso'),
    autoprefixer  = require('autoprefixer'),
    stylesPATH = {
    "input": "./src/sass/",
    "output": "./build/css/"
  };

module.exports = function() {
  $.gulp.task('styles:dev', () => {
    return $.gulp.src(stylesPATH.input + 'styles.scss')
      .pipe(plumber())
      .pipe(scss())
      .pipe(postcss([
        autoprefixer({
          browsers: ['last 2 versions', '> 0.5%'],
          cascade: false
        })
      ]))
      .pipe($.gulp.dest(stylesPATH.output))
      .on('end', $.browserSync.reload);
  });
  $.gulp.task('styles:build', () => {
    return $.gulp.src(stylesPATH.input + 'styles.scss')
      .pipe(scss())
      .pipe(postcss([
        autoprefixer({
          browsers: ['last 2 versions', '> 0.5%'],
          cascade: false
        }),
        csso
      ]))
      .pipe($.gulp.dest(stylesPATH.output))
  });
};
