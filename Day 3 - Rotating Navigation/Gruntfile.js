const sass = require("node-sass");

module.exports = (grunt) => {
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          "main.css": "main.scss",
        },
      },
    },

    watch: {
      files: ["./*.scss"],
      tasks: ["sass"],
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: ["*.css", "*.html", "*.js"],
        },

        options: {
          watchTask: true,
          server: {
            baseDir: "./",
          },
        },
      },
    },
  });

  //   Loading plugins
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");

  //   register task(s)
  grunt.registerTask("grunt-sass", ["sass"]);
  grunt.registerTask("default", ["browserSync", "watch"]);
};
