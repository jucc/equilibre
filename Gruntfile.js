module.exports = function(grunt) {

	// CONFIG TASKS

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// TASK: UGLIFY --------------

		uglify: {
			dist: { 				  // concatenate all scripts and minify them
				src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'js/*.js'],
				dest: 'dist/js/scripts.min.js'
			},
			dev: {
				options: {			// concatenate all scripts but keep them readable
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'js/*.js'],
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
      		'dist/css/basecss.min.css': ['bower_components/bootstrap/dist/css/bootstrap.min.css', 'bower_components/bootstrap/dist/css/bootstrap-theme.min.css', 'app/css/custombootstrap.css']
    		}
  		}
		},

		// TASK: WATCH -------------------

		watch: {
			js: {					// rebuild dev script when js files change
				files: ['js/*.js'],
				tasks: ['uglify:dev']
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
    }
	});

	// LOAD PLUGINS

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-bake' );
	grunt.loadNpmTasks('grunt-contrib-watch');

	// REGISTER TASKS

	grunt.registerTask('default', ['cssmin', 'bake:includes', 'uglify:dev']); // most used task = just type grunt
	grunt.registerTask('dist',    ['cssmin', 'bake:includes', 'uglify:dist']);
};
