const { gulp, series, parallel, src, dest, watch } = require("gulp");
const dotenv = require("dotenv");
dotenv.config();
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
var concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
var sass = require("gulp-sass");
sass.compiler = require("node-sass");
//console.log("MODE :", process.env.MODE);
async function buildJS() {
  return await src(["src/js/vendor/*.js", "src/js/*.js"], { sourcemaps: true })
    .pipe(babel())
    .pipe(concat("all.min.js"))
    .pipe(uglify())
    .pipe(dest("public/js/", { sourcemaps: "." }));
}

async function buildSCSS() {
  return await src("./src/sass/**/*.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(src(["src/css/**/*.css"]))
    .pipe(concat("all.min.css"))
    .pipe(cleanCSS())
    .pipe(dest("public/css", { sourcemaps: true }));
}

async function vendorCSS() {
  return await src(["src/css/vendor/*.css"])
    .pipe(concat("all.css"))
    .pipe(cleanCSS())
    .pipe(dest("public/css/"));
}
async function watchJS() {
  await watch("src/**/*.js", series(buildJS));
}
async function buildSASS() {
  console.log("buildSASS...");
  return await series(buidSCSS);
}
exports.default = series(buildSCSS, buildJS);
