module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./src/sass/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch('./src/img/**/*.{png,jpg,gif}', $.gulp.series('img:dev'));
        $.gulp.watch('./src/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./src/js/**/*.js', $.gulp.series('js:dev'));
    });
};