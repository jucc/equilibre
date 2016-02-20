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
		}
	});

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// register taks
	grunt.registerTask('default', ['uglify:dev']); // most used task = just type grunt
	grunt.registerTask('dist',    ['uglify:dist']);
};
