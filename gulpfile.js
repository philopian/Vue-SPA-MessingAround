var gulp        = require('gulp');
var path        = require('path');
var runSequence = require('run-sequence');
var paths       = require('./gulp.conf');
var plugins     = require('gulp-load-plugins')();

var taskPath = './gulp-tasks/';
var taskList = require('fs').readdirSync(taskPath);// async readdir does not identify task names
taskList.forEach(function (taskFile) {
    require(taskPath + taskFile)(gulp, plugins);
});


/**************************************************************************************/
/*          Gulp TASKS                                                                */
/**************************************************************************************/

// Server the actual server
gulp.task('serve:static', ['local-static-server']);
gulp.task('s', ['serve:static']);
gulp.task('serve', ['s']);
gulp.task('default', ['s']);
