//Gruntfile
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        // Task configuration
        concat: {
            options: {
                separator: ';'
            },
            js_frontend: {
                src: ['./bower_components/jquery/dist/jquery.js',
                    './bower_components/javascript-detect-element-resize/jquery.resize.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './bower_components/waitForImages/dist/jquery.waitforimages.js',
                    './bower_components/modernizr/modernizr.js',
                    './bower_components/carousel-3d/dist/jquery.carousel-3d.js',
                    './app/assets/javascript/frontend.js',
                ],
                dest: './public/assets/javascript/frontend.js'
            },
            js_mapengine: {
                src: ['./bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './app/assets/javascript/mapengine.js',
                ],
                dest: './public/assets/javascript/mapengine.js'
            },
            js_backend: {
                src: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './app/assets/javascript/backend.js'
                ],
                dest: './public/assets/javascript/backend.js'
            }
        },
        less: {
            development: {
                options: {
                    compress: true  //minifying the result
                },
                files: {
                    //compiling frontend.less into frontend.css
                    "./public/assets/stylesheets/frontend.css":"./app/assets/stylesheets/frontend.less",
                    //compiling backend.less into backend.css
                    "./public/assets/stylesheets/backend.css":"./app/assets/stylesheets/backend.less"
                }
            }
        },
        uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            frontend: {
                files: {
                    './public/assets/javascript/frontend.js': './public/assets/javascript/frontend.js'
                }
            },
            mapengine: {
                files: {
                    './public/assets/javascript/mapengine.js': './public/assets/javascript/mapengine.js'
                }
            },
            backend: {
                files: {
                    './public/assets/javascript/backend.js': './public/assets/javascript/backend.js'
                }
            }
        },
        phpunit: {
            classes: {
                dir: 'app/tests/'   //location of the tests
            },
            options: {
                bin: 'vendor/bin/phpunit',
                colors: true
            }
        },
        watch: {
            js_frontend: {
                files: [
                    //watched files
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './app/assets/javascript/frontend.js',
                    './app/assets/javascript/mapengine.js'
                ],
                tasks: ['concat:js_frontend','concat:js_mapengine'], //,'uglify:frontend','uglify:mapengine' ],     //tasks to run
                options: {
                    livereload: true                        //reloads the browser
                }
            },
            js_backend: {
                files: [
                    //watched files
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './app/assets/javascript/backend.js'
                ],
                tasks: ['concat:js_backend'], //'uglify:backend'],     //tasks to run
                options: {
                    livereload: true                        //reloads the browser
                }
            },
            less: {
                files: ['./app/assets/stylesheets/*.less'],  //watched files
                tasks: ['less'],                          //tasks to run
                options: {
                    livereload: true                        //reloads the browser
                }
            },
            tests: {
                files: ['app/controllers/*.php','app/models/*.php'],  //the task will run only when you save files in this location
                tasks: ['phpunit']
            }
        }
    });

    // // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-phpunit');


    // Task definition
    grunt.registerTask('default', ['watch']);

};