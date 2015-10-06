module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'source/js/libs/*.js',
                    'source/js/global.js'
                ],
                dest: 'source/js/build/main.js',
            },
        },

        uglify: {
            build: {
                src: 'source/js/build/main.js',
                dest: 'public/js/main.min.js'
            },
            build: {
                src: 'source/js/flickity-settings.js',
                dest: 'public/js/flickity-settings.min.js'
            },
            build: {
                src: 'source/js/portfolio-shuffle.js',
                dest: 'public/js/portfolio-shuffle.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'public/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/img/build'
                }]
            }
        },
        
        less: {
            development: {
                options: {
                    paths: ['source/less']
                },
                files: {
                    'public/css/theme.css': 'source/less/theme.less',
                    'public/css/components.css': 'source/less/components.less'
                }
            }
        },
        
        autoprefixer: {
            dist: {
                files: {
                    'public/css/style.css': 'public/css/style.css'
                }
            }
        },
        
        cssmin: {
            target: {
                files: {
                    'public/css/theme.min.css': ['public/css/theme.css'],
                    'public/css/components.min.css': ['public/css/components.css']
                }
            }
        },
            
        uncss: {
            dist: {
                src: ['public/*.html'],
                dest: 'public/css/build/tidy.min.css',
                options: {
                    report: 'min' // optional: include to report savings
                }
            }
        },

        watch: {
            scripts: {
                files: ['source/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },

            css: {
                files: ['source/less/**/*.less'],
                tasks: ['less','cssmin'],
                options: {
                    spawn: false,
                }
            },
        },

         browserSync: {
             dev: {
                 bsFiles: {
                     src: ["public/css/*.css", "public/*.html", "public/js/*.js"]
                 },
                 options: {
                     watchTask: true, // < VERY important
                     server: {
                         baseDir: "./public"
                     },
                     ghostMode: {
                         clicks: true,
                         location: true,
                         forms: true,
                         scroll: true
                     }
                 }
             }
        },

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-browser-sync');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','uglify','less','cssmin','browserSync', 'watch']);
    grunt.registerTask('removecss', ['uncss']);

};