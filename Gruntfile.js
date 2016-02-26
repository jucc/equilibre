module.exports = function(grunt) {

   // configure tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			dist: { 				// concatenate scripts and minify
				src: 'js/*.js',
				dest:'dist/js/script.min.js'
			},
			dev: {
				options: {			// concatenate scripts and make them readable
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src: 'js/*.js',
				dest:'dist/js/script.min.js'
			}
		},

		watch: {
			js: {					// rebuild dev script when js files change
				files: ['js/*.js'],
				tasks: ['uglify:dev']
			}
		},

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

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bake' );

	// register taks
	grunt.registerTask('default', ['bake:includes', 'uglify:dev']); // most used task = just type grunt
	grunt.registerTask('dist',    ['bake:includes', 'uglify:dist']);
};
