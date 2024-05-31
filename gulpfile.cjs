const { src, dest, watch, series, parallel } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const terser = require("gulp-terser");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const files = {
  bootstrapPath: "src/bootstrap/5.3.0/**/*.scss",
  scssPath: "src/styles/*.scss",
  jsPath: "src/scripts/**/*.js",
};

function scssTask() {
  return src(files.scssPath, { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("public/css", { sourcemaps: "." }));
}

function bootstrapTask() {
  return src(files.bootstrapPath, { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("public/bootstrap", { sourcemaps: "." }));
}

function jsTask() {
  return src(
    [
      files.jsPath,
      //,'!' + 'includes/js/jquery.min.js',
    ],
    { sourcemaps: true }
  )
    .pipe(terser())
    .pipe(dest("public/js", { sourcemaps: "." }));
}

function watchJS() {
  watch([files.jsPath], { interval: 1000, usePolling: true }, series(jsTask));
}

function watchCSS() {
  watch(
    [files.scssPath],
    { interval: 1000, usePolling: true },
    series(scssTask)
  );
}

exports.default = series(
  parallel(bootstrapTask, scssTask, jsTask),
  parallel(watchJS, watchCSS)
);
