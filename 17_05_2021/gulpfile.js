"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var srcmap = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var server = require("browser-sync").create();

var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");

var imagemin = require("gulp-imagemin");

var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");

var del = require("del");

gulp.task("css", function () {
  return gulp.src("src/scss/style.scss")
    .pipe(plumber())
    .pipe(srcmap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(srcmap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function() {
  return gulp.src("src/images/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/images"));
});

gulp.task("html", function() {
  return gulp.src("src/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("src/scss/**/*.scss", gulp.series("css"));
  gulp.watch("src/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function(done) {
  server.reload();
  done();
})

gulp.task("copy", function() {
  return gulp.src([
    "src/fonts/**/*.{woff,woff2}",
    "src/js/**",
    "src/*.ico"
  ], {
    base: "src"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "images",
  "html"
));
gulp.task("start", gulp.series("build", "server"));