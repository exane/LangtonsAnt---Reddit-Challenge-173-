var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

gulp.task('browserify', function(){
    browserify('./src/main.js', {standalone: "LangtonsAnt"})
        .bundle().on("error", function(err){
            console.log(err);
        })

        .pipe(source('bundle.js').on("error", function(err){
            console.log(err);
        }))

        .pipe(gulp.dest('./build/').on("error", function(err){
            console.log(err);
        }));
});

gulp.task("watch", function(){
    gulp.watch("./src/*.js", ["browserify"]);
})

gulp.task("default", ["browserify", "watch"]);