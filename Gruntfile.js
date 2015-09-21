module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
          compass: {
            files: "scss/**/*.scss",
            tasks: "compass:dist",
            options: {
              interrupt: true
            }
          },
          concat_app: {
            files: "_js/**/*",
            tasks: "concat:app"
          },
        },
        compass: {
          dist: {
            options: {
              sassDir: "scss/",
              cssDir: "css/"
            }
          }
        },
        concat: {
          vendor: {
            src: [
              "_js/lib/modernizr/modernizr.js",
              "_js/lib/jquery/jquery.js",
              "_js/lib/spotify-web-api-js/spotify-web-api.js"
            ],
            dest: "js/vendors.js"
          },
          app: {
            src: "_js/app.js",
            dest: "js/app.js"
          }
        },
        uglify: {
          js: {
            files: {
              // "js/app.js" : ["js/app.js"],
              // "js/vendors.js" : ["js/vendors.js"]
            }
          }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("build", ["concat:vendor", "concat:app", "compass:dist", "uglify:js"]);
};