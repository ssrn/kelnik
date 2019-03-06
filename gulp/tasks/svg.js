let svgSprite   = require('gulp-svg-sprite'),
    svgmin      = require('gulp-svgmin'),
    cheerio     = require('gulp-cheerio'),
    replace     = require('gulp-replace'),
    svgPath = {
        "input": "./src/img/svg/*.svg",
        "output": "./build/img/svg/"
    };

module.exports = function () {
    $.gulp.task('svg', () => {
        return $.gulp.src(svgPath.input)
            .pipe(svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe(cheerio({
                run: function ($) {
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe(replace('&gt;', '>'))
            .pipe(svgSprite({
                mode: {
                    symbol: {
                        sprite: "../sprite.svg"
                    }
                }
            }))
            .pipe($.gulp.dest(svgPath.output));
    });
};
