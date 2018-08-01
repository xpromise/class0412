/*
  grunt配置文件，执行grunt指令会默认读取的配置文件
 */

module.exports = function (grunt) {
  //声明形参grunt
  //1. 初始化配置
  grunt.initConfig({
    jshint: {
      options: {      //要进行哪些语法检查
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        undef: true,
        esversion: 6,
        globals: {
          jQuery: true,
          module: true,
          console: true
        },
      },
      all: ['Gruntfile.js', 'src/js/*.js']    //要进行语法检查的文件
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand: true,     //如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名。
          cwd: 'src/',      //js目录下
          src: ['js/*.js'], //所有js文件
          dest: 'build/'  //语法转换后输出到此目录下
        }]
      }
    }
  });
  //2. 加载任务插件
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-babel');
  //3. 注册默认任务
  grunt.registerTask('default', ['jshint', 'babel']);  //grunt执行任务是同步的，从左到右依次执行
};