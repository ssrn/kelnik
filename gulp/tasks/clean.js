let del = require('del');

module.exports = function () {
    $.gulp.task('clean', function () {
        return del('./build')
    })
};