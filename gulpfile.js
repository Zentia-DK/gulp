const gulp = require("gulp");
const sass= require("gulp-sass");


function styles() {
    return(
        gulp.src("css/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("css"))
    );
}

exports.styles = styles;