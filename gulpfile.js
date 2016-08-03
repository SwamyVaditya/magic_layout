
var gulp = require("gulp"),
watch = require("gulp-watch"),

fileInclude = require("gulp-file-include"),
htmlmin = require("gulp-html-minifier"),

jshint = require("gulp-jshint"),
stylish = require("jshint-stylish"),

devFolder = "home_page/dev",
siteFolder = "home_page/site";

gulp.task("valid-js", function (){
	
    gulp.src(devFolder + "/js/**/*.js")
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	
});

gulp.task("build-site", function(){
	
	gulp.src(siteFolder + "/index.html")
	.pipe(fileInclude({prefix: "@@", basepath: "@file"}))
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest(siteFolder + "/dist"));

});
