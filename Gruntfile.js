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
      bundle: {
        src: [
          'js/vendor/jquery-1.11.1.min.js',
          'js/vendor/bootstrap-3.3.1/transition.js',
          'js/vendor/bootstrap-3.3.1/alert.js',
          'js/vendor/bootstrap-3.3.1/button.js',
          'js/vendor/bootstrap-3.3.1/carousel.js',
          'js/vendor/bootstrap-3.3.1/collapse.js',
          'js/vendor/bootstrap-3.3.1/dropdown.js',
          'js/vendor/bootstrap-3.3.1/modal.js',
          'js/vendor/bootstrap-3.3.1/tooltip.js',
          'js/vendor/bootstrap-3.3.1/popover.js',
          'js/vendor/bootstrap-3.3.1/scrollspy.js',
          'js/vendor/bootstrap-3.3.1/tab.js',
          'js/vendor/bootstrap-3.3.1/affix.js',
          'js/vendor/typeahead.jquery-0.10.5.js',
          'js/vendor/lodash-2.4.1.js',
          'js/account-popover.jquery.js',
          'js/navigation.jquery.js',
          'js/search-suggest.jquery.js'
        ],
        dest: 'dist/js/<%= pkg.name %>-bundle.js'
      },
      standalone: {
        src: [
          'js/account-popover.jquery.js',
          'js/navigation.jquery.js',
          'js/search-suggest.jquery.js'
        ],
        dest: 'dist/js/<%= pkg.name %>-standalone.js'
      }
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },
      bundle: {
        src: '<%= concat.bundle.dest %>',
        dest: 'dist/js/<%= pkg.name %>-bundle.min.js'
      },
      standalone: {
        src: '<%= concat.standalone.dest %>',
        dest: 'dist/js/<%= pkg.name %>-standalone.min.js'
      }
    },

    qunit: {
      options: {
        inject: 'js/tests/unit/phantom.js'
      },
      files: 'js/tests/index.html'
    },

    qunit_junit: {
      options: {

      }
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
      compileDefaultTheme: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>-default-theme.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>-default-theme.css.map'
        },
        src: 'less/default-theme.less',
        dest: 'dist/css/<%= pkg.name %>-default-theme.css'
      },
      compileDocs: {
        options: {
          paths: ['docs/assets/css', 'docs/assets/site']
        },
        files: {
          'docs/assets/css/config-options.css': 'docs/assets/css/config-options.less',
          'docs/assets/css/subsite.css': 'docs/assets/css/subsite.less',
          'docs/assets/site/docs-site.css': 'docs/assets/site/docs-site.less',
          'docs/assets/site/site.css': 'docs/assets/site/site.less'
        }
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
      defaultTheme: {
        options: {
          map: true
        },
        src: 'dist/css/<%= pkg.name %>-default-theme.css'
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
      minifyDefaultTheme: {
        src: 'dist/css/<%= pkg.name %>-default-theme.css',
        dest: 'dist/css/<%= pkg.name %>-default-theme.min.css'
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
        src: 'images/**/*',
        dest: 'dist/'
      },
      vendorjs: {
        src: 'js/vendor/*',
        dest: 'dist/'
      },
      docs: {
        src: 'dist/**/*',
        dest: 'docs/'
      }
    },

    concurrent: {
      serve: {
        tasks: ['watch','exec:jekyllServe'],
        options: {
          logConcurrentOutput: true
        }
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

    markdown: {
      readme: {
        files: [
          {
            expand: true,
            src: 'README.md',
            dest: 'docs/_includes/',
            ext: '.html'
          }
        ],
        options: {
          template: 'blank.jst'
        }
      }
    },

    jekyll: {
      options: {
        config: '_config.yml',
        bundleExec: true
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
          'Bad value separator for attribute role on element li.',
          'Consider using the h1 element as a top-level heading only \\(all h1 elements are treated as top-level headings by many screen readers and other tools\\).',
          'The color input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.'
        ]
      },
      files: {
        src: '_gh_pages/**/*.html'
      }
    },

    watch: {
      core: {
        files: '<%= jshint.core.src %>',
        tasks: ['dist-js', 'copy:vendorjs', 'copy:docs']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:core', 'jshint:test', 'qunit']
      },
      less: {
        files: 'less/**/*.less',
        tasks: ['less-compile', 'autoprefixer:core', 'autoprefixer:defaultTheme', 'copy:fonts', 'copy:images', 'copy:docs']
      }
    },

    exec: {
      npmUpdate: {
        command: 'npm update'
      },
      jekyllServe: {
        command: 'bin/jekyll serve'
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
  grunt.registerTask('test-js', ['jshint:core', 'jshint:test', 'jscs:core', 'jscs:test', 'qunit_junit', 'qunit']);

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat:bundle', 'uglify:bundle', 'concat:standalone', 'uglify:standalone']);

  // CSS distribution.
  grunt.registerTask('less-compile', ['less:compileCore', 'less:compileDefaultTheme']);
  grunt.registerTask('dist-css', ['less-compile', 'autoprefixer:core', 'autoprefixer:defaultTheme', 'csscomb:dist', 'cssmin:minifyCore', 'cssmin:minifyDefaultTheme']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean:dist', 'dist-css', 'copy:fonts', 'copy:images', 'dist-js', 'copy:vendorjs']);

  // Default task.
  grunt.registerTask('default', ['clean:dist', 'copy:fonts', 'copy:images', 'copy:vendorjs', 'test']);

  // Docs task.
  grunt.registerTask('docs', ['clean:docs', 'copy:docs', 'markdown:readme', 'less:compileDocs']);

  // Run Jekyll and watch for asset changes.
  grunt.registerTask('serve', ['concurrent:serve'])
};