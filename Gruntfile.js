module.exports = function(grunt) {

   // CONFIG TASKS

   var vendorScripts = [
   	'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/jquery/dist/jquery.min.js',
      //'bootstrap-custom/js/bootstrap.min.js',
      'bower_components/moment/min/moment.min.js',
      'bower_components/fullcalendar/dist/fullcalendar.min.js',
      'bower_components/fullcalendar/dist/lang/pt-br.js'];
   var mockScripts = ['mockup/*.js'];
   var appScripts  = ['app/js/app.js', 'app/js/customcalendar.js'];

   var stylesList  = [
      'bootstrap-custom/css/bootstrap.min.css',
      'bootstrap-custom/css/bootstrap-theme.min.css',
      'bower_components/fullcalendar/dist/fullcalendar.css',
      'app/css/*.css'];

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // TASK: UGLIFY --------------

      uglify: {
         dist: { 				   // concatenate all scripts and minify them
            src: vendorScripts.concat(appScripts),
            dest: 'dist/js/basescripts.min.js'
         },
         dev: {					   // concatenate all scripts but keep them readable
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


      // TASK: BAKE --------------------

      bake: {
         includes: {
            options: {
               parsePattern: '/\[\{\s?([\.\-\w]*)\s?\}\]/g'
            },
            files: {
               "dist/admin.html": "app/admin.html",
               "dist/appointments.html": "app/appointments.html",
               "dist/index.html": "app/index.html",
               "dist/patients.html": "app/patients.html",
               "dist/professionals.html": "app/professionals.html",
               "dist/rooms.html": "app/rooms.html",
            }
         },
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
   grunt.loadNpmTasks('grunt-bake');

   // REGISTER TASKS

   grunt.registerTask('default', ['copy:main', 'cssmin', 'bake:includes', 'uglify:dev']); // most used task = just type grunt
   grunt.registerTask('dist',    ['copy:main', 'cssmin', 'bake:includes', 'uglify:dist']);
   grunt.registerTask('mock',    ['copy:main', 'cssmin', 'bake:includes', 'uglify:mock']);
};
