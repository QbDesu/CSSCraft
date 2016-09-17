module.exports = function(grunt){
	grunt.initConfig({
		concat:{
			css:{
				src: ['src/csscraft/css/*.css'],
				dest: 'dist/csscraft/css/csscraft.css'
			}
		},
		sass: {
			dist: { 
				files: [{
					expand: true,
					cwd: 'src/csscraft/sass',
					src: ['*.sass'],
					dest: 'src/csscraft/css',
					ext: '.css'
				}]
			}
		},
		copy:{
			images:{
				expand: true,
				cwd: 'src/csscraft/images/',
				src: '**',
				dest: 'dist/csscraft/images/'
			},
			fonts:{
				expand: true,
				cwd: 'src/csscraft/fonts/',
				src: '**',
				dest: 'dist/csscraft/fonts/'
			}
		},
		cssmin:{
			dist:{
				files: [{
					expand: true,
					cwd: 'dist/csscraft/css/',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/csscraft/css/',
					ext: '.min.css'
				}]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.registerTask("build", ["sass:dist","concat:css","cssmin:dist","copy:fonts","copy:images"])
};
