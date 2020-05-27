var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui',
  'node_modules/aos/src/sass',
  'node_modules/hamburgers/_sass',
  'node_modules/tippy.js',
  'node_modules/jvectormap-next'
];

function styles() {
  return gulp.src('assets/scss/app.scss')
    .pipe(
      sass({includePaths: sassPaths, outputStyle: 'compressed'})
      .on('error', sass.logError)
    )
    .pipe(gulp.dest('assets/css'));
}

var jsPaths = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/foundation-sites/dist/js/foundation.js',
  'node_modules/what-input/dist/what-input.js',
  'node_modules/aos/dist/aos.js',
  'node_modules/motion-ui/dist/motion-ui.js',
  'node_modules/jquery.cookie/jquery.cookie.js',
  'node_modules/@popperjs/core/dist/umd/popper.js',
  'node_modules/tippy.js/dist/tippy.umd.js',
  'node_modules/jvectormap-next/jquery-jvectormap.js',
  'node_modules/jvectormap-content/world-merc.js',
  'assets/js/svgxuse.js',
  'assets/js/app.js'
]

function scripts() {
  return gulp.src(jsPaths)
    .pipe(concat('app-min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/min'));
}

function watch() {
  gulp.watch("assets/scss/*.scss", styles);
  gulp.watch("assets/js/*.js", scripts);
}

exports.styles = styles;
exports.scripts = scripts;
exports.build = gulp.parallel(styles, scripts)
exports.watch = watch;
exports.default = watch;
