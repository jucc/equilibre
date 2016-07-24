module.exports = function(grunt) {

   // CONFIG TASKS

   var vendorScripts = [
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/moment/min/moment.min.js',
      'bower_components/fullcalendar/dist/fullcalendar.min.js',
      'bower_components/fullcalendar/dist/lang/pt-br.js'];
   var mockScripts = ['mock/*.js'];
   var appScripts  = [
      'app/js/app.js',
      'app/js/directives/*.js',
      'app/js/controllers/*.js',
      'app/js/customcalendar.js'];

   var stylesList  = [
      'bootstrap-custom/css/bootstrap.min.css',
      'bootstrap-custom/css/bootstrap-theme.min.css',
      'bower_components/fullcalendar/dist/fullcalendar.css',
      'app/css/*.css'];

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // TASK: UGLIFY --------------

      uglify: {
         dist: {              // concatenate all scripts and minify them
            src: vendorScripts.concat(appScripts),
            dest: 'dist/js/basescripts.min.js'
         },
         dev: {               // concatenate all scripts but keep them readable
            options: {
               beautify: true,
               mangle: false,
               compress: false,
               preserveComments: 'all'
            },
            src: vendorScripts.concat(appScripts),
            dest:'dist/js/basescripts.min.js'
         },
         mock: {
            options: {
               beautify: true,
               mangle: false,
               compress: false,
               preserveComments: 'all'
            },
            src: vendorScripts.concat(mockScripts).concat(appScripts),
            dest:'dist/js/basescripts.min.js'
         }
      },


      // TASK: CSSMIN

      cssmin: {
         options: {
            shorthandCompacting: false,
            roundingPrecision: -1
         },
         target: {
            files: {
               'dist/css/basecss.min.css': stylesList
            }
         }
      },


      // TASK: WATCH -------------------

      watch: {
         js: {
            files: vendorScripts.concat(mockScripts).concat(appScripts),
            tasks: ['uglify:dev']
         },
         css: {
            files: stylesList,
            tasks: ['cssmin']
         },
         html: {
            files: ['app/*.html', 'app/templates/*.html'],
            tasks: ['bake:includes']
         }
      },


      // TASK : COPY -------------------

      copy: {
         main: {
            files: [
               // bootstrap glyphicon fonts
               {
                  expand: true,
                  flatten: true,
                  filter: 'isFile',
                  cwd: 'bootstrap-custom/fonts/',
                  src: '**',
                  dest: 'dist/fonts/'
               },
               // images
               {
                  expand: true,
                  flatten: true,
                  filter: 'isFile',
                  cwd: 'app/img/',
                  src: '**',
                  dest: 'dist/img/'
               },
               // views
               {
                  expand: true,
                  flatten: true,
                  filter: 'isFile',
                  cwd: 'app/view/',
                  src: ['*.html', '../index.html'],
                  dest: 'dist'
               },
               // templates
               {
                  expand: true,
                  flatten: true,
                  filter: 'isFile',
                  cwd: 'app/templates/',
                  src: '**',
                  dest: 'dist/templates/'
               },
               // mockup json
               {
                  expand: true,
                  flatten: true,
                  filter: 'isFile',
                  cwd: 'mock/',
                  src: '*.json',
                  dest: 'dist/mock/'
               }
            ]
         }
      }
   });


   // LOAD PLUGINS

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-copy');

   // REGISTER TASKS

   grunt.registerTask('default', ['copy:main', 'cssmin', 'uglify:dev']); // most used task = just type grunt
   grunt.registerTask('dist',    ['copy:main', 'cssmin', 'uglify:dist']);
   grunt.registerTask('mock',    ['copy:main', 'cssmin', 'uglify:mock']);
};
