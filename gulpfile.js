'use strict';

var gulp = require('gulp');
var litecoreTasks = require('flashcore-build');

litecoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
