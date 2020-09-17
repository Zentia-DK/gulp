const gulp = require("gulp");
const sass= require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require ("cssnano");


function styles() {
    return(
        gulp.src("css/*.scss")
            .pipe(sourcemaps.init())
            .pipe(sass())
            //.pipe(postcss([autoprefixer({grid:true}), cssnano()]))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("css"))
    );
}

exports.styles = styles;

function watch() {
    gulp.watch("css/*scss", styles);

}

exports.watch = watch;