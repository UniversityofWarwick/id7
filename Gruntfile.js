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
          'js/vendor/jquery-1.12.4.min.js',
          'js/vendor/bootstrap-3.3.7/transition.js',
          'js/vendor/bootstrap-3.3.7/alert.js',
          'js/vendor/bootstrap-3.3.7/button.js',
          'js/vendor/bootstrap-3.3.7/carousel.js',
          'js/vendor/bootstrap-3.3.7/collapse.js',
          'js/vendor/bootstrap-3.3.7/dropdown.js',
          'js/vendor/bootstrap-3.3.7/modal.js',
          'js/vendor/bootstrap-3.3.7/tooltip.js',
          'js/vendor/bootstrap-3.3.7/popover.js',
          'js/vendor/bootstrap-3.3.7/scrollspy.js',
          'js/vendor/bootstrap-3.3.7/tab.js',
          'js/vendor/bootstrap-3.3.7/affix.js',
          'js/vendor/typeahead.jquery-0.11.1.js',
          'js/vendor/lodash-4.17.2.js',
          'js/vendor/modernizr-3.3.1-custom.js',
          'js/vendor/jquery.doubleScroll-0.5.js',
          'js/vendor/headroom-0.9.3.min.js',
          'js/vendor/jquery.headroom-0.9.3.min.js',
          'js/reflow-event.jquery.js',
          'js/account-popover.jquery.js',
          'js/navigation.jquery.js',
          'js/search-suggest.jquery.js',
          'js/wide-tables.jquery.js',
          'js/not-selector-feature-detect.modernizr.js',
          'js/safari-user-agent-detect.modernizr.js',
          'js/ie10-viewport-bug-workaround.js'
        ],
        dest: 'dist/js/<%= pkg.name %>-bundle.js'
      },
      standalone: {
        src: [
          'js/reflow-event.jquery.js',
          'js/account-popover.jquery.js',
          'js/navigation.jquery.js',
          'js/search-suggest.jquery.js',
          'js/wide-tables.jquery.js',
          'js/not-selector-feature-detect.modernizr.js',
          'js/ie10-viewport-bug-workaround.js'
        ],
        dest: 'dist/js/<%= pkg.name %>-standalone.js'
      },
      homepage: {
        src: [
          'docs/assets/external-homepage/jquery.panelSnap.js',
          'docs/assets/external-homepage/homepage-carousel.jquery.js',
          'docs/assets/external-homepage/more-links-popover.jquery.js'
        ],
        dest: 'dist/external-homepage/js/hp.js'
      }
    },

    uglify: {
      options: {
        preserveComments: 'some',
        sourceMap: true
      },
      bundle: {
        src: '<%= concat.bundle.dest %>',
        dest: 'dist/js/<%= pkg.name %>-bundle.min.js'
      },
      standalone: {
        src: '<%= concat.standalone.dest %>',
        dest: 'dist/js/<%= pkg.name %>-standalone.min.js'
      },
      homepage: {
        src: '<%= concat.homepage.dest %>',
        dest: 'dist/external-homepage/js/hp.min.js'
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
      compileID6a: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'id6a.css.map',
          sourceMapFilename: 'dist/css/id6a.css.map'
        },
        src: 'less/id6a.less',
        dest: 'dist/css/id6a.css'
      },
      compileDocs: {
        options: {
          paths: ['docs/assets/css', 'docs/assets/site', 'docs/assets/external-homepage']
        },
        files: {
          'docs/assets/css/config-options.css': 'docs/assets/css/config-options.less',
          'docs/assets/css/subsite.css': 'docs/assets/css/subsite.less',
          'docs/assets/site/docs-site.css': 'docs/assets/site/docs-site.less',
          'docs/assets/site/site.css': 'docs/assets/site/site.less',
          'docs/assets/external-homepage/external-homepage-prod.css': 'docs/assets/external-homepage/external-homepage-prod.less'
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
      },
      id6a: {
        options: {
          map: true
        },
        src: 'dist/css/id6a.css'
      },
      docs: {
        options: {
          expand: true,
          flatten: true
        },
        src: 'docs/assets/css/*.css'
      },
      docsSite: {
        options: {
          expand: true,
          flatten: true
        },
        src: 'docs/assets/site/*.css'
      },
      homepage: {
        options: {
          expand: true,
          flatten: true
        },
        src: 'docs/assets/external-homepage/*.css'
      }
    },

    csslint: {
      options: {
        csslintrc: 'less/.csslintrc'
      },
      dist: [
        'dist/css/id7.css',
        'dist/css/id7-default-theme.css',
        'dist/css/id6a.css'
      ]
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        advanced: false
      },
      minifyCore: {
        src: 'dist/css/<%= pkg.name %>.css',
        dest: 'dist/css/<%= pkg.name %>.min.css'
      },
      minifyDefaultTheme: {
        src: 'dist/css/<%= pkg.name %>-default-theme.css',
        dest: 'dist/css/<%= pkg.name %>-default-theme.min.css'
      },
      minifyID6a: {
        src: 'dist/css/id6a.css',
        dest: 'dist/css/id6a.min.css'
      },
      minifyHomepage: {
        src: 'dist/external-homepage/css/external-homepage-prod.css',
        dest: 'dist/external-homepage/css/hp.min.css'
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
      },
      distHomepage: {
        expand: true,
        cwd: 'docs/assets/external-homepage/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/external-homepage/css/'
      }
    },

    replace: {
      homepage: {
        options: {
          patterns: [
            {
              match: /\/dist/g,
              replacement: '/static_war/render/id7'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['dist/external-homepage/css/*.css'],
            dest: 'dist/external-homepage/css/'
          }
        ]
      }
    },

    copy: {
      fonts: {
        expand: true,
        src: 'fonts/*',
        dest: 'dist/'
      },
      images: {
        expand: true,
        src: ['images/**/*', '!images/*.sh', '!images/src', '!images/src/**/*'],
        dest: 'dist/'
      },
      vendorjs: {
        expand: true,
        src: ['js/vendor/*', '!js/vendor/bootstrap-3.3.7'],
        dest: 'dist/'
      },
      docs: {
        expand: true,
        src: 'dist/**/*',
        dest: 'docs/'
      },
      templates: {
        expand: true,
        src: 'templates/*',
        dest: 'dist/'
      },
      templatesToDocs: {
        expand: true,
        src: 'templates/*',
        dest: 'docs/_includes'
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

    compress: {
      main: {
        options: {
          archive: 'id7-<%= pkg.version %>-dist.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: ['**', '!css/id6a.*', '!images/id6a*'],
            dest: 'id7-<%= pkg.version %>-dist'
          }
        ]
      },
      id6a: {
        options: {
          archive: 'id6a-<%= pkg.version %>-dist.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: ['css/id6a.*', 'images/id6a*'],
            dest: 'id6a-<%= pkg.version %>-dist'
          }
        ]
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
        tasks: ['less-compile', 'autoprefixer:core', 'autoprefixer:defaultTheme', 'autoprefixer:id6a', 'copy:fonts', 'copy:templates', 'copy:images', 'copy:docs']
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

  grunt.registerTask('test', testSubtasks);
  grunt.registerTask('test-js', ['jshint:core', 'jshint:test', 'jscs:core', 'jscs:test', 'qunit_junit', 'qunit']);

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat:bundle', 'uglify:bundle', 'concat:standalone', 'uglify:standalone']);

  // CSS distribution.
  grunt.registerTask('less-compile', ['less:compileCore', 'less:compileDefaultTheme', 'less:compileID6a']);
  grunt.registerTask('dist-css', ['less-compile', 'autoprefixer:core', 'autoprefixer:defaultTheme', 'autoprefixer:id6a', 'csscomb:dist', 'cssmin:minifyCore', 'cssmin:minifyDefaultTheme', 'cssmin:minifyID6a']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean:dist', 'dist-css', 'copy:fonts', 'copy:templates', 'copy:images', 'dist-js', 'copy:vendorjs']);

  // Default task.
  grunt.registerTask('default', ['clean:dist', 'copy:fonts', 'copy:templates', 'copy:images', 'copy:vendorjs', 'test']);

  // Docs task.
  grunt.registerTask('docs', ['clean:docs', 'copy:docs', 'copy:templatesToDocs', 'markdown:readme', 'less:compileDocs', 'autoprefixer:docs', 'autoprefixer:docsSite', 'autoprefixer:homepage', 'jekyll:docs']);

  grunt.registerTask('dist-homepage-css', ['less:compileDocs', 'autoprefixer:homepage', 'csscomb:distHomepage', 'replace:homepage', 'cssmin:minifyHomepage']);
  grunt.registerTask('dist-homepage-js', ['concat:homepage', 'uglify:homepage']);
  grunt.registerTask('homepage-assets', ['dist', 'clean:docs', 'copy:docs', 'dist-homepage-css', 'dist-homepage-js']);

  // Prepare a release
  grunt.registerTask('prep-release', ['dist', 'docs', 'compress']);

  // Run Jekyll and watch for asset changes.
  grunt.registerTask('serve', ['concurrent:serve'])
};
