"use strict";

const sass = require("node-sass");

module.exports = (grunt) => {
  // Project configuration
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
  // Load plugin
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");

  // Default task(S)
  grunt.registerTask("default", ["browserSync", "watch"]);
};
