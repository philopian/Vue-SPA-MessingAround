/**************************************************************************************/
/*          SERVER LOCAL FILES                                                        */
/**************************************************************************************/
var browserSync = require('browser-sync');
var chalk       = require('chalk');
var runSequence = require('run-sequence');
var gulpConf    = require('../gulp.conf');


module.exports = function(gulp, $) {
    'use strict';

    gulp.task('local-static-server', function() {
        browserSync.init({
            server: {
                baseDir: "./www"
            },
            notify: false
        });
        gulp.watch(gulpConf.frontendFiles)
            .on('error', function(error) {
                console.log(error.toString()); // If you want details of the error in the console
                this.emit('end');
            })
            .on('change', browserSync.reload);
        gulp.watch(gulpConf.sassFiles)
            .on('error', function(error) {
                console.log(error.toString()); // If you want details of the error in the console
                this.emit('end');
            })
            .on('change', function() {
                runSequence('sass', browserSync.reload);
            });
        gulp.watch('bower.json')
            .on('error', function(error) {
                console.log(error.toString()); // If you want details of the error in the console
                this.emit('end');
            })
            .on('change', function() {
                runSequence('update-tags', browserSync.reload);
            });
    });
};
