//引入插件模块
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
/*
  任务回调函数中，
      如果加上return ，就是一个异步的任务
      如果没有加上return， 就是同步的任务
 */
//注册插件任务
/*gulp.task('jshint', () => {
  return gulp.src('./src/js/!*.js')   //将指定目录下的文件加载到gulp流中
    .pipe(jshint({esversion: 6}))     // 对gulp流中的文件进行语法检查
    .pipe(jshint.reporter('default'));  // 将检查错误提示出来
})

gulp.task('babel', ['jshint'], () => {
  return gulp.src('./src/js/!*.js')  //将指定目录下的文件加载到gulp流中
    .pipe(babel({    // 对gulp流中的文件进行语法转换
      presets: ['es2015']
    }))
    .pipe(gulp.dest('build/js'))  // 将gulp流中的文件输出指定目录中
});

gulp.task('concat', ['babel'], () => {
  return gulp.src('./build/js/!*.js')
    .pipe(concat('built.js'))  // 将gulp流中的文件合并成一个文件
    .pipe(gulp.dest('build/js'));
});

gulp.task('uglify', ['concat'], () => {
  return gulp.src('./build/js/built.js')
    .pipe(uglify())  // 将gulp流中的文件压缩
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
});*/

gulp.task('js', () => {
  return gulp.src('./src/js/*.js')   //将指定目录下的文件加载到gulp流中
    .pipe(jshint({esversion: 6}))     // 对gulp流中的文件进行语法检查
    .pipe(jshint.reporter('default'))  // 将检查错误提示出来
    .pipe(babel({                    // 对gulp流中的文件进行语法转换
        presets: ['es2015']
      }))
    .pipe(gulp.dest('build/js'))  // 将gulp流中的文件输出指定目录中
    .pipe(concat('built.js'))  // 将gulp流中的文件合并成一个文件
    .pipe(gulp.dest('build/js'))
    .pipe(uglify())  // 将gulp流中的文件压缩
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
})

//注册默认任务
gulp.task('default', ['js']);
