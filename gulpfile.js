var gulp = require('gulp');
var jest = require('jest-cli');

var jestConfig = {
  "rootDir": '.',
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json"
  ],
  "scriptPreprocessor": "./preprocessor.js",
  "unmockedModulePathPatterns": [
    "./node_modules/react"
  ]
};

gulp.task('test', function(done) {
    jest.runCLI({ config : jestConfig }, ".", function() {
        done();
    });
});

gulp.task('watch', ['test'], function(done) {
    gulp.watch(['./**/*.js', './**/*.jsx'], [ 'test' ]);
});

gulp.task('default', ['watch']);