'use strict'

gulp = require 'gulp'
sass = require 'gulp-sass'
pleeease = require 'gulp-pleeease'
browserSync = require 'browser-sync'

SRC = './src'
DEST = '.'

gulp.task 'sass', () ->
  gulp.src "#{SRC}/scss/style.scss"
    .pipe do sass
    .pipe pleeease {
      autoprefixer: {
        browsers: [
          "ie >= 10",
          "ie_mob >= 10",
          "ff >= 30",
          "chrome >= 34",
          "safari >= 7",
          "opera >= 23",
          "ios >= 7",
          "android >= 4.4",
          "bb >= 10"
        ]
      },
      "minifier": false
    }
    .pipe gulp.dest "#{DEST}/css"

gulp.task 'css', gulp.series('sass')

gulp.task 'browser-sync' , () ->
  browserSync
    server: {
      baseDir: DEST
    }

  gulp.watch(["#{SRC}/scss/**/*.scss"], gulp.series('sass', browserSync.reload));

gulp.task('serve', gulp.series('browser-sync'));

gulp.task('build', gulp.series('css'));
gulp.task 'default', gulp.series('build', 'serve');
