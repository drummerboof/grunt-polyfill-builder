'use strict';

var webpack = require('webpack'),
    fs = require('fs'),
    path = require('path');

module.exports = function(grunt) {
    console.log(__dirname);

    function featureToModule (feature) {
        var modulePath = 'core-js/modules/' + feature;
        return require.resolve(modulePath);
    }

    grunt.registerTask('polyfill', 'Creates a custom polyfill based on the core-js features given in the config', function () {

        var done = this.async();

        var options = this.options({
            features: [],
            output: null,
            uglify: true
        });

        var webpackPlugins = [];

        if (options.uglify) {
            webpackPlugins.push(new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }));
        }

        webpack({
            entry: options.features.map(featureToModule),
            output: {
                path: path.dirname(options.output),
                filename: path.basename(options.output)
            },
            plugins: webpackPlugins
        }, function(err, info){
            if (err) {
                grunt.fail.fatal(err.message, 1);
            }
            done();
        });
    });
};

