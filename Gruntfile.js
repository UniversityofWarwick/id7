module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  var fs = require('fs');
  var path = require('path');

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
    ' * University of Warwick ID7\n' +
    ' */\n',

    // Task configuration.
    clean: {
      dist: 'dist',
      docs: 'docs/dist'
    },

    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      core: {
        src: 'js/*.js'
      },
      test: {
        options: {
          jshintrc: 'js/tests/unit/.jshintrc'
        },
        src: 'js/tests/unit/*.js'
      }
    },

    jscs: {
      options: {
        config: 'js/.jscsrc'
      },
      core: {
        src: '<%= jshint.core.src %>'
      },
      test: {
        options: {
          config: 'js/tests/unit/.jscsrc'
        },
        src: '<%= jshint.test.src %>'
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>\n<%= jqueryCheck %>\n<%= jqueryVersionCheck %>',
        stripBanners: false
      },
      core: {
        src: [
          'js/vendor/jquery-1.11.1.min.js',
          'js/vendor/webfont-1.5.6.min.js',
          'js/vendor/bootstrap-3.3.1.min.js',
          'js/vendor/typeahead.jquery-0.10.5.js',
          'js/vendor/lodash-2.4.1.js',
          'js/account-popover.jquery.js',
          'js/navigation.jquery.js',
          'js/search-suggest.jquery.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },
      core: {
        src: '<%= concat.core.dest %>',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },

    qunit: {
      options: {
        inject: 'js/tests/unit/phantom.js'
      },
      files: 'js/tests/index.html'
    },

    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        },
        src: 'less/id7.less',
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      compileAvenir: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'avenir-next.css.map',
          sourceMapFilename: 'dist/css/avenir-next.css.map'
        },
        src: 'less/avenir-next.less',
        dest: 'dist/css/avenir-next.css'
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          "Android 2.3",
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 8",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6"
        ]
      },
      core: {
        options: {
          map: true
        },
        src: 'dist/css/<%= pkg.name %>.css'
      },
      avenir: {
        options: {
          map: true
        },
        src: 'dist/css/avenir-next.css'
      }
    },

    csslint: {
      options: {
        csslintrc: 'less/.csslintrc'
      },
      dist: [
        'dist/css/id7.css'
      ]
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        noAdvanced: true
      },
      minifyCore: {
        src: 'dist/css/<%= pkg.name %>.css',
        dest: 'dist/css/<%= pkg.name %>.min.css'
      },
      minifyAvenir: {
        src: 'dist/css/avenir-next.css',
        dest: 'dist/css/avenir-next.min.css'
      }
    },

    csscomb: {
      options: {
        config: 'less/.csscomb.json'
      },
      dist: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/'
      }
    },

    copy: {
      fonts: {
        src: 'fonts/*',
        dest: 'dist/'
      },
      images: {
        src: 'images/*',
        dest: 'dist/'
      },
      vendorjs: {
        src: 'js/vendor/*',
        dest: 'dist/'
      },
      docs: {
        src: 'dist/*/*',
        dest: 'docs/'
      }
    },

    connect: {
      server: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    },

    jekyll: {
      options: {
        config: '_config.yml'
      },
      docs: {}
    },

    validation: {
      options: {
        charset: 'utf-8',
        doctype: 'HTML5',
        failHard: true,
        reset: true,
        relaxerror: [
          'Element img is missing required attribute src.',
          'Attribute autocomplete not allowed on element input at this point.',
          'Attribute autocomplete not allowed on element button at this point.',
          'Bad value separator for attribute role on element li.'
        ]
      },
      files: {
        src: '_gh_pages/**/*.html'
      }
    },

    watch: {
      src: {
        files: '<%= jshint.core.src %>',
        tasks: ['jshint:src', 'qunit', 'concat']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
      less: {
        files: 'less/**/*.less',
        tasks: 'less'
      }
    },

    exec: {
      npmUpdate: {
        command: 'npm update'
      }
    }
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);

  // Docs HTML validation task
  grunt.registerTask('validate-html', ['jekyll:docs', 'validation']);

  var runSubset = function (subset) {
    return !process.env.TWBS_TEST || process.env.TWBS_TEST === subset;
  };
  var isUndefOrNonZero = function (val) {
    return val === undefined || val !== '0';
  };

  // Test task.
  var testSubtasks = [];

  // Skip core tests if running a different subset of the test suite
  if (runSubset('core')) {
    testSubtasks = testSubtasks.concat(['dist-css', 'dist-js', 'csslint:dist', 'test-js', 'docs']);
  }

  // Skip HTML validation if running a different subset of the test suite
  if (runSubset('validate-html')) {
    testSubtasks.push('validate-html');
  }

  grunt.registerTask('test', testSubtasks);
  grunt.registerTask('test-js', ['jshint:core', 'jshint:test', 'jscs:core', 'jscs:test', 'qunit']);

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify:core']);

  // CSS distribution.
  grunt.registerTask('less-compile', ['less:compileCore', 'less:compileAvenir']);
  grunt.registerTask('dist-css', ['less-compile', 'autoprefixer:core', 'autoprefixer:avenir', 'csscomb:dist', 'cssmin:minifyCore', 'cssmin:minifyAvenir']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean:dist', 'dist-css', 'copy:fonts', 'copy:images', 'dist-js', 'copy:vendorjs']);

  // Default task.
  grunt.registerTask('default', ['clean:dist', 'copy:fonts', 'copy:images', 'copy:vendorjs', 'test']);

  // Docs task.
  grunt.registerTask('docs', ['clean:docs', 'copy:docs']);
};