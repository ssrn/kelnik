let pug             = require('gulp-pug'),
    data            = require('gulp-data'),
    fs              = require('fs');

module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src('./src/pug/*.pug')
            .pipe(data(function() {
                return JSON.parse(fs.readFileSync('src/data/flats.json'))
            }))
            .pipe(pug({
                pretty: true
            }))
            .pipe($.gulp.dest('./build/'))
            .pipe($.browserSync.stream());
    });
};
