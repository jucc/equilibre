module.exports = function(grunt) {

	// CONFIG TASKS

	var scriptsList = ['bower_components/jquery/dist/jquery.min.js',
										 'bootstrap-custom/js/bootstrap.min.js',
										 'bower_components/moment/min/moment.min.js',
										 'bower_components/fullcalendar/dist/fullcalendar.min.js',
										 'bower_components/fullcalendar/dist/lang/pt-br.js',
										 'mockup/*.js',
										 'app/js/*.js'
									  ];

	var stylesList  = ['bootstrap-custom/css/bootstrap.min.css',
	                   'bootstrap-custom/css/bootstrap-theme.min.css',
										 'bower_components/fullcalendar/dist/fullcalendar.css',
										 'app/css/*.css'];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// TASK: UGLIFY --------------

		uglify: {
			dist: { 				   // concatenate all scripts and minify them
				src: scriptsList,
				dest: 'dist/js/basescripts.min.js'
			},
			dev: {					   // concatenate all scripts but keep them readable
				options: {
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src: scriptsList,
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
				files: scriptsList,
				tasks: ['uglify:dev']
			},
			css: {
				files: stylesList,
				tasks: ['cssmin']
			},
			html: {
				files: ['app/*.html', 'app/includes/*.html'],
				tasks: ['bake:includes']
			}
		},


		// TASK: BAKE --------------------

    bake: {
      includes: {
        options: { },
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
};
