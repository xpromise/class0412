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
          console: true,
          require: true
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
    },
    concat: {
      options: {
        separator: ';',  //分割符
      },
      dist: {
        src: ['build/js/*.js'],  //要合并的源文件
        dest: 'build/js/built.js',   //合并后输出的文件
      },
    },
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        files: {
          'dist/js/dist.min.js': ['build/js/built.js']  // 压缩后输出的文件  / 要压缩的源文件
        }
      }
    },
    less: {
      production: {
        options: {
          paths: ['build/css'],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions", "not ie <= 8"]}),  //扩展前缀
          ]
        },
        files: {
          'build/css/index.css': 'src/less/*.less'  //   编译后的css文件  / 要编译的less文件
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,   //不要合并css
        roundingPrecision: -1         //不要四舍五入
      },
      target: {
        files: {
          'dist/css/index.min.css': ['build/css/index.css']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,      //移除注释
          collapseWhitespace: true   //删除多余空格
        },
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },
    watch: {
      scripts: {  //js文件的处理
        files: ['src/js/*.js'],   //要监视的文件
        tasks: ['jshint', 'babel', 'concat', 'uglify'],       //一旦监视的文件发生变化，就自动执行任务列表中的任务
        options: {
          spawn: false,  //加快任务处理速度
        },
      },
      css: {
        files: 'src/less/*.less',
        tasks: ['less', 'cssmin'],
        options: {
          spawn: false,  //加快任务处理速度
        },
      },
      html: {
        files: 'src/index.html',
        tasks: ['htmlmin'],
        options: {
          spawn: false,  //加快任务处理速度
        },
      },
    },
  });
  //2. 加载任务插件
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //3. 注册默认任务
  grunt.registerTask('default', ['jshint', 'babel', 'concat', 'uglify', 'less', 'cssmin', 'htmlmin']);  //grunt执行任务是同步的，从左到右依次执行
  grunt.registerTask('myWatch', ['default', 'watch']);
};