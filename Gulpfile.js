var fs = require('fs'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
umd = require('gulp-umd'),
uglify = require('gulp-uglify'),
gulp = require('gulp');

gulp.task('default', [
  'minify'
]);

gulp.task('watch', function() {
	gulp.watch('./src/**/*', ['default']);
});

gulp.task('minify', function() {
	gulp.src([
		'./src/module.js',
		'./src/services/*.js'
	])
	.pipe(concat('angular-api-adapter.js'))
	.pipe(umd({
		dependencies: function() {
			return [
				{
					name: 'jQuery',
					cjs: 'jquery',
					amd: 'jquery',
					param: 'jQuery',
					global: 'jQuery'
				},
				{
					name: 'jquery-api-adapter',
					cjs: 'jquery.api-adapter',
					amd: 'jquery.api-adapter',
					param: 'Api',
					global: 'jQuery.Api'
				}
			]
		},
		exports: function() {
			return;
		},
		namespace: function() {
			return 'angularApiAdapter';
		}
	}))
	.pipe(gulp.dest('./dist/'))
	.pipe(uglify())
	.pipe(rename('angular-api-adapter.min.js'))
	.pipe(gulp.dest('./dist/'));
});