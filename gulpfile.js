var gulp = require("gulp");
var exec = require('child_process').exec;

// Build TypeScript.
gulp.task("tsc", function(callback) {
  exec("tsc", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    callback();
  });
});
