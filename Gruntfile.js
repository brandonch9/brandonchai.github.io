module.exports = function (grunt) {
	// Project configuration.

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			multiple_files: {
					expand: true,
					flatten: true,
					src: 'pub/css/*.css',
					dest: 'pub/css/'
			}
		},
		sass: {
			dist: {
				 files: {
				 	 'pub/css/style.css' : 'pub/css/style.sass',
					 'pub/css/brysontiller.css' : 'pub/css/brysontiller.sass'
				 }
			}
		},
		watch: {
		  options: {
		  	livereload: true,
		  },
		  sass: {
		    files: 'pub/css/**/*.sass',
		    tasks: ['sass', 'autoprefixer'],
		  }
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass', 'autoprefixer', 'watch']);
};
