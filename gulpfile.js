var gulp          = require('gulp');
var connect       = require('gulp-connect'); // add "gulp-connect": "^2.0.6", to package.json *NOTE: gulp-connect DEPRECATED
var notify        = require('gulp-notify');
var source        = require('vinyl-source-stream');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var browserSync   = require('browser-sync').create();
var rename        = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify        = require('gulp-uglify');
var merge         = require('merge-stream');
var sass          = require('gulp-sass');
var log           = require('fancy-log');

// Where our files are located
var jsFiles   = "src/js/**/*.js";
var viewFiles = "src/js/**/*.html";

var interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};


var scssFiles = "./src/public/stylesheets/sass/**/*.scss";
var cssFiles  = "./build/";

gulp.task('sass', function() {
  return gulp.src(scssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssFiles))
});
gulp.task('sass:watch', function() {
  gulp.watch(scssFiles, ['sass']);
});

gulp.task('browserify', ['views'], function() {
  return browserify('./src/js/app.js')
      .transform(babelify, {presets: ["es2015"]})
      .transform(ngAnnotate)
      .bundle()
      .on('error', interceptErrors)
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest('./build/'));
});

gulp.task('html', function() {
  return gulp.src("src/index.html")
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
});

gulp.task('views', function() {
  return gulp.src(viewFiles)
      .pipe(templateCache({
        standalone: true
      }))
      .on('error', interceptErrors)
      .pipe(rename("app.templates.js"))
      .pipe(gulp.dest('./src/js/config/'));
});

// This task is used for building production ready
// minified JS/CSS files into the dist/ folder
gulp.task('build', ['html', 'browserify'], function() {
  var html = gulp.src("build/index.html")
                 .pipe(gulp.dest('./dist/'));

  var js = gulp.src("build/main.js")
               .pipe(uglify())
               .pipe(gulp.dest('./dist/'));

  return merge(html,js);
});

gulp.task('images', function() {
  return gulp.src('./src/assets/img/**/*')
    .on('error', interceptErrors)
    .pipe(gulp.dest('./build/images'))
})

gulp.task('default', ['html', 'browserify', 'sass', 'sass:watch', 'images'], function() {
  log('NODE_ENV: ', process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'production') {
    connect.server({ // ** THIS IS DEFINITELY NOT THE RIGHT WAY TO WORK THIS - HAVING THIS gulp-connect server SERVE Express server??? **
      root: "./build",
      // livereload: true,
      port: process.env.PORT || 8080 // process.env.PORT provided by Heroku
    });
  } else {
    browserSync.init(['./build/**/**.**'], {
      server: "./build",
      // port: 4000,
      port: process.env.PORT || 8080, // process.env.PORT provided by Heroku
      notify: false,
      ui: {
        port: 4001
      }
    });    
  }

  gulp.watch("src/index.html", ['html']);
  gulp.watch(viewFiles, ['views']);
  gulp.watch(jsFiles, ['browserify']);
});
