module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'dev/js/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    jscs: {
      src: "dev/**/*.js",
      options: {
        esnext: false,
        verbose: true,
        config: 'jscs.json' // See http://jscs.info/rules for options
      }
    },
    uglify: {
      options: {
        screwIE8: true,
        preserveComments: false
      },
      all: {
        files: grunt.file.expandMapping(['dist/nice-alerts.js'], 'dist/', {
		    	flatten: true,
	        rename: function(destBase, destPath) {
            if (destPath.indexOf('.min.js') !== -1) { return destBase + destPath; }
	          return destBase + destPath.replace('.js', '.min.js');
	        }
		    })
      }
    },
    webpack: {
      all: {
        entry: "./dev/js/nice-alerts.js",
        output: {
          path: "dist",
          filename: "nice-alerts.js",
        },
        stats: {
          colors: true,
          modules: true,
          reasons: true
        },
        storeStatsTo: "webpackStats",
        failOnError: true,
        keepalive: false,
        module: {
          loaders: [
            {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
            },
            {
              test: /\.eot$|\.ttf$|\.woff$|\.woff2$/,
              loader: "file-loader"
            },
            {
              test: /\.html$/,
              loader: "html-loader"
            }
          ]
        }
      }
    },
    karma: {
      acceptance: {
        configFile: 'karma.conf.js',
        browsers: ['Chrome', 'Firefox'],
        files: [{ src: './dist/nice-alerts.js' }, { src: './dev/tests/acceptance/*.js' }]
      }
    },
    watch: {
      all: {
        files: ['dev/**/*.js', 'dev/sass/*.scss', 'dev/sass/**/*.scss'],
        tasks: ['jshint', 'jscs', 'webpack:all', 'uglify:all'],
        options: {
          spawn: false,
        }
      },
      acceptance: {
        files: ['dev/tests/acceptance/*.js'],
        tasks: ['karma:acceptance'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-notify');
  grunt.registerTask('default', ['jshint', 'jscs', 'webpack:all', 'uglify:all', 'karma:acceptance']);
  grunt.registerTask('build', ['jshint', 'jscs', 'webpack:all', 'uglify:all']);
  grunt.registerTask('qa', ['karma:acceptance']);
};
