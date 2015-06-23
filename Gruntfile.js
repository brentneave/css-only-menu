module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
        files: {
          'www/static/css/screen.css' : 'frontend/scss/screen.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'www/static/css/screen.css':'www/static/css/screen.css'
        }
      }
    },
    concat: {
      dist: {
        src: ['frontend/js/*.js'],
        dest: 'www/static/js/site.concat.js'
      }
    },
    uglify: {
      dist: {
        src: 'www/static/js/site.concat.js',
        dest: 'www/static/js/site.concat.min.js'
      },
    },
    watch: {
      css: {
        files: ['frontend/scss/*.scss',
                'frontend/scss/components/*.scss',
                'frontend/scss/global/*.scss',
                'frontend/scss/layouts/*.scss',
                'frontend/scss/mixins/*.scss',
                'frontend/scss/third-party/*.scss'],
        tasks: ['sass', 'autoprefixer']
      },
      js: {
        files: ['js/src/*.js'],
        tasks: ['concat', 'uglify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['sass', 'autoprefixer', 'concat', 'uglify', 'watch']);
}