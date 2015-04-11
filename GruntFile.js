module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      ssl: {
        options: {
          port: 8000,
          hostname: '*',
          protocol: 'https'
        }
      },
      serve: {
        options: {
          port: 8000,
          hostname: '*',
          protocol: 'http'
        }
      }
    },
    watch: {
      all: {
        files: '**/*',
        options: {
          livereload: true,
        },
      },
    },
    express: {
      options: {
        // Override defaults here
        // script: 'app.js'
      },
      dev: {
        options: {
          script: 'app.js'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-express-server');

  // Default task(s).
  grunt.registerTask('default', ['watch:all']);
  grunt.registerTask('serve', ['express:dev']);
  // grunt.registerTask('serve', ['connect:serve', 'watch:all']);


};
