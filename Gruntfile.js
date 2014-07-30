// Generated by CoffeeScript 1.7.1
"use strict";
module.exports = function(grunt) {
  var md5Today, today;
  require("load-grunt-tasks")(grunt);
  require("time-grunt")(grunt);
  grunt.config.set("ip", require("ip").address());
  today = grunt.template.today("yyyymmddss");
  md5Today = require("md5").digest_s(today);
  grunt.initConfig({
    yeoman: {
      app: require("./bower.json").appPath || "app",
      dist: "dist",
      today: today,
      md5: md5Today,
      prefix: today,
      secret: grunt.file.readJSON("secret.json"),
      onlineURL: "http://115.29.49.123/mifan/app"
    },
    watch: {
      bower: {
        files: ["bower.json"],
        tasks: ["bowerInstall"]
      },
      js: {
        files: ["<%= yeoman.app %>/scripts/*.js"],
        tasks: [],
        options: {
          livereload: true
        }
      },
      controllers: {
        files: ["<%= yeoman.app %>/scripts/controllers/*.js"],
        tasks: ["concat:controllers"],
        options: {
          livereload: false
        }
      },
      directives: {
        files: ["<%= yeoman.app %>/scripts/directives/*.js"],
        tasks: ["concat:directives"],
        options: {
          livereload: false
        }
      },
      filters: {
        files: ["<%= yeoman.app %>/scripts/filters/*.js"],
        tasks: ["concat:filters"],
        options: {
          livereload: false
        }
      },
      requires: {
        files: ["<%= yeoman.app %>/scripts/requires/*.js"],
        tasks: ["concat:requires"],
        options: {
          livereload: false
        }
      },
      jsTest: {
        files: ["test/spec/{,*/}*.js"],
        tasks: ["karma"]
      },
      compass: {
        files: ["<%= yeoman.app %>/styles/{,*/}*.{scss,sass}"],
        tasks: ["compass:server", "autoprefixer"]
      },
      gruntfile: {
        files: ["Gruntfile.js"]
      },
      livereload: {
        options: {
          livereload: "<%= connect.options.livereload %>"
        },
        files: ["<%= yeoman.app %>/{,*/}*.html", ".tmp/styles/{,*/}*.css", "<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"]
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: grunt.config.get("ip"),
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [".tmp", "<%= yeoman.app %>"]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [".tmp", "test", "<%= yeoman.app %>"]
        }
      },
      dist: {
        options: {
          open: true,
          base: "<%= yeoman.dist %>"
        }
      }
    },
    jshint: {
      options: {
        jshintrc: ".jshintrc",
        reporter: require("jshint-stylish")
      },
      all: ["Gruntfile.js", "<%= yeoman.app %>/scripts/{,*/}*.js"],
      test: {
        options: {
          jshintrc: "test/.jshintrc"
        },
        src: ["test/spec/{,*/}*.js"]
      }
    },
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [".tmp", "<%= yeoman.dist %>/*", "!<%= yeoman.dist %>/.git*"]
          }
        ]
      },
      distView: {
        files: [
          {
            dot: true,
            src: ["<%= yeoman.dist %>/views"]
          }
        ]
      },
      server: ".tmp"
    },
    autoprefixer: {
      options: {
        browsers: ["last 1 version"]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: ".tmp/styles/",
            src: "{,*/}*.css",
            dest: ".tmp/styles/"
          }
        ]
      }
    },
    bowerInstall: {
      app: {
        src: ["<%= yeoman.app %>/index.html"],
        ignorePath: "<%= yeoman.app %>/"
      },
      sass: {
        src: ["<%= yeoman.app %>/styles/{,*/}*.{scss,sass}"],
        ignorePath: "<%= yeoman.app %>/bower_components/"
      }
    },
    compass: {
      options: {
        sassDir: "<%= yeoman.app %>/styles",
        cssDir: ".tmp/styles",
        specify: "<%= yeoman.app %>/styles/main.scss",
        generatedImagesDir: ".tmp/images/generated",
        imagesDir: "<%= yeoman.app %>/images",
        javascriptsDir: "<%= yeoman.app %>/scripts",
        fontsDir: "<%= yeoman.app %>/styles/fonts",
        importPath: "<%= yeoman.app %>/styles/imports",
        httpImagesPath: "/images",
        httpGeneratedImagesPath: "/images/generated",
        httpFontsPath: "/styles/fonts",
        relativeAssets: false,
        assetCacheBuster: false,
        raw: "Sass::Script::Number.precision = 10\n"
      },
      dist: {
        options: {
          generatedImagesDir: "<%= yeoman.dist %>/images/generated"
        }
      },
      server: {
        options: {
          debugInfo: false
        }
      }
    },
    rev: {
      dist: {
        files: {
          src: ["<%= yeoman.dist %>/scripts/{,*/}*.js", "<%= yeoman.dist %>/styles/{,*/}*.css"]
        }
      }
    },
    useminPrepare: {
      html: "<%= yeoman.app %>/index.html",
      options: {
        dest: "<%= yeoman.dist %>",
        flow: {
          html: {
            steps: {
              js: ["concat", "uglifyjs"],
              css: ["cssmin"]
            },
            post: {}
          }
        }
      }
    },
    usemin: {
      html: ["<%= yeoman.dist %>/{,*/}*.html"],
      css: ["<%= yeoman.dist %>/styles/{,*/}*.css"],
      options: {
        assetsDirs: ["<%= yeoman.dist %>"]
      }
    },
    cssmin: {
      options: {
        root: "<%= yeoman.app %>"
      }
    },
    imagemin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.app %>/images",
            src: "{,*/}*.{png,jpg,jpeg,gif}",
            dest: "<%= yeoman.dist %>/images"
          }
        ]
      }
    },
    svgmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.app %>/images",
            src: "{,*/}*.svg",
            dest: "<%= yeoman.dist %>/images"
          }
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true,
          removeComments: true
        },
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.dist %>",
            src: ["*.html"],
            dest: "<%= yeoman.dist %>"
          }
        ]
      }
    },
    ngmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: ".tmp/concat/scripts",
            src: "*.js",
            dest: ".tmp/concat/scripts"
          }
        ]
      }
    },
    cdnify: {
      dist: {
        html: ["<%= yeoman.dist %>/*.html"]
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: "<%= yeoman.app %>",
            dest: "<%= yeoman.dist %>",
            src: ["*.{ico,png,txt}", ".htaccess", "*.html", "views/{,*/}*.html", "images/{,*/}*.{webp}", "fonts/*", "fonts/*", "bower/*", "data/*"]
          }, {
            expand: true,
            cwd: ".tmp/images",
            dest: "<%= yeoman.dist %>/images",
            src: ["generated/*"]
          }
        ]
      },
      styles: {
        expand: true,
        cwd: "<%= yeoman.app %>/styles",
        dest: ".tmp/styles/",
        src: "{,*/}*.css"
      }
    },
    concurrent: {
      server: ["compass:server"],
      test: ["compass"],
      dist: ["compass:dist", "imagemin", "svgmin"]
    },
    concat: {
      controllers: {
        src: ["<%= yeoman.app %>/scripts/controllers/*.js"],
        dest: "<%= yeoman.app %>/scripts/controllers.js"
      },
      directives: {
        src: ["<%= yeoman.app %>/scripts/directives/*.js"],
        dest: "<%= yeoman.app %>/scripts/directives.js"
      },
      filters: {
        src: ["<%= yeoman.app %>/scripts/filters/*.js"],
        dest: "<%= yeoman.app %>/scripts/filters.js"
      },
      requires: {
        src: ["<%= yeoman.app %>/scripts/requires/*.js"],
        dest: "<%= yeoman.app %>/scripts/requires.js"
      }
    },
    karma: {
      unit: {
        configFile: "karma.conf.js",
        singleRun: true
      }
    },
    "ng_template": {
      files: ["<%= yeoman.dist %>/views"],
      options: {
        appDir: "<%= yeoman.dist %>",
        indexFile: "index.html",
        concat: true
      }
    },
    'regex-replace': {
      dist: {
        actions: [
          {
            search: '/fonts/glyphicons',
            replace: '../fonts/glyphicons',
            flags: 'g'
          }
        ],
        src: ["<%= yeoman.dist %>/styles/mifan.css"]
      },
      html: {
        actions: [
          {
            search: "scripts/mifan.js",
            replace: "scripts/<%= yeoman.prefix %>.mifan.js",
            flags: 'g'
          }, {
            search: "styles/mifan.css",
            replace: "styles/<%= yeoman.prefix %>.mifan.css",
            flags: 'g'
          }
        ],
        src: ["<%= yeoman.dist %>/index.html"]
      }
    },
    rename: {
      dist: {
        files: [
          {
            src: "<%= yeoman.dist %>/styles/mifan.css",
            dest: "<%= yeoman.dist %>/styles/<%= yeoman.prefix %>.mifan.css"
          }, {
            src: "<%= yeoman.dist %>/scripts/mifan.js",
            dest: "<%= yeoman.dist %>/scripts/<%= yeoman.prefix %>.mifan.js"
          }
        ]
      }
    },
    'sftp-deploy': {
      build: {
        auth: {
          host: "<%= yeoman.secret.host %>",
          port: "<%= yeoman.secret.port %>",
          authKey: 'key1'
        },
        src: "<%= yeoman.dist %>",
        dest: "<%= yeoman.secret.path %>",
        exclusions: ["<%= yeoman.dist %>/bower", "<%= yeoman.dist %>/fonts", "<%= yeoman.dist %>/images", "<%= yeoman.dist %>/favicon.ico", "<%= yeoman.dist %>/.htaccess", "<%= yeoman.dist %>/robots.txt"],
        serverSep: "/",
        concurrency: 4,
        progress: true
      }
    },
    open: {
      online: {
        path: "<%= yeoman.onlineURL %>",
        app: "Google Chrome"
      }
    }
  });
  grunt.registerTask("serve", function(target) {
    if (target === "dist") {
      return grunt.task.run(["build", "connect:dist:keepalive"]);
    }
    grunt.task.run(["clean:server", "bowerInstall", "concurrent:server", "autoprefixer", "connect:livereload", "concat:controllers", "concat:requires", "watch"]);
  });
  grunt.registerTask("server", function(target) {
    grunt.log.warn("The `server` task has been deprecated. Use `grunt serve` to start a server.");
    grunt.task.run(["serve:" + target]);
  });
  grunt.registerTask("test", ["clean:server", "concurrent:test", "autoprefixer", "connect:test", "karma"]);
  grunt.registerTask("build", ["clean:dist", "bowerInstall", "concat:controllers", "concat:requires", "useminPrepare", "concurrent:dist", "autoprefixer", "concat", "ngmin", "copy:dist", "cdnify", "cssmin", "uglify", "usemin", "ng_template", "htmlmin", "clean:distView", "regex-replace", "rename:dist"]);
  grunt.registerTask("publish", ["build", "sftp-deploy", "open:online"]);
  return grunt.registerTask("default", ["build"]);
};
