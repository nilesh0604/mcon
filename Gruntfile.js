"use strict";
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'app/scripts/app.js'],
            options: {
                "bitwise": true,
                "browser": true,
                "curly": true,
                "eqeqeq": true,
                "esnext": true,
                "latedef": true,
                "noarg": true,
                "node": true,
                "strict": true,
                "undef": true,
                "unused": true,
                "globals": {
                    "angular": false
                }
            }

        },

        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    singleRun: true,
                    browsers: ['PhantomJS'],
                    files: [
                        'app/vendor/angular.js',
                        'app/vendor/angular-ui.js',
                        'bower_components/angular-mocks.js',
                        'app/scripts/app.js',
                        'test/MainCtrl.test.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test', ['karma', 'jshint']);

};