//引入插件模块
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');
const opn = require('opn');
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
  return gulp.src(['./build/js/module1.js', './build/js/module2.js'])
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
    .pipe(livereload())
})

gulp.task('css', () => {
  return gulp.src('./src/less/*.less')
    .pipe(less({      //将less转化为css   扩展css前缀
      plugins: [autoprefix]
    }))
    .pipe(concat('index.css'))   //合并css
    .pipe(gulp.dest('./build/css'))
    .pipe(cssmin())         //压缩css
    .pipe(rename({suffix: '.min'}))  //重命名css
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
})

gulp.task('html', () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({             //html文件压缩
      collapseWhitespace: true,    //去掉多余的空格
      removeComments: true         //移除注释
    }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})

gulp.task('watch', () => {
  //监听任务
  livereload.listen();
  //监听文件，一旦文件发生改变，就自动执行后面的任务
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/less/*.less', ['css']);
  gulp.watch('src/index.html', ['html']);
  //开启一个服务器，运行指定文件
  connect.server({
    root: 'dist/',
    livereload: true,   //开启热更新功能
    port: 3000   //端口号
  });
  //打开网页
  opn('http://localhost:3000');
})

//注册默认任务
gulp.task('default', ['js', 'css', 'html']);
gulp.task('myWatch', ['default', 'watch']);
