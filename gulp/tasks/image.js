let imagemin               = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    pngquant               = require('imagemin-pngquant'),
    cache                  = require('gulp-cache'),
    imgPATH = {
        "input": ["./src/img/**/*.{png,jpg,gif,svg}",
            '!./src/img/svg/*'],
        "output": "./build/img/"
    };

module.exports = function () {
    $.gulp.task('img:dev', () => {
        return $.gulp.src(imgPATH.input)
            .pipe($.gulp.dest(imgPATH.output));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src(imgPATH.input)
            .pipe(cache(imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.jpegtran({progressive: true}),
                imageminJpegRecompress({
                    loops: 5,
                    min: 70,
                    max: 75,
                    quality: 'medium'
                }),
                imagemin.svgo(),
                imagemin.optipng({optimizationLevel: 3}),
                pngquant({quality: [0.65, 0.7], speed: 5})
            ], {
                verbose: true
            })))
            .pipe($.gulp.dest(imgPATH.output));
    });
};
