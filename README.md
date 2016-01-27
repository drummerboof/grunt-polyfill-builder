# Grunt Polyfill Builder

###### Create small a single polyfill file using only the features you need based on core-js

This task uses [webpack](https://webpack.github.io/) to build a javascript poyfill file for you based
on the modules from [core-js](https://github.com/zloirock/core-js). You can define a list of modules to include
and the resulting file is built using webpack and optionally minified.

## Installation

```
npm install --save-dev grunt-polyfill-builder
```

## Usage
Load the plugin in your Gruntfile.js and define a configuration block

```
grunt.initConfig({
    polyfill: {
        options: {
            uglify: true,
            features: ['es5', 'es6.object.assign'],
            output: 'webapp/static-versioned/script/lib/polyfill.js'
        }
    }
});

grunt.loadNpmTasks('grunt-polyfill-builder');

```

## Options

#### Uglify
Boolean. If set to true then the resulting JS file will be run through webpack's
[UglifyJsPlugin](https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin)

#### Features
An array containing the list of core-js features you want to include. The values should refer to core-js module names.
A full list of available features can be found [here](https://github.com/zloirock/core-js#features)
###### Example
```
{
    features: ['es5', 'es6.object.assign', 'es6.array.from']
}
```
This would create a polyfill file containing the es5 module and the es6.object.assign and es6.array.from modules.

#### Output
The Output file you in to which you would like the polyfill to be saved.
###### Example
```
{
    output: 'lib/polyfill.js'
}
```

---

Currently the mapping of modules is very simple and just looks for the corresponding module file within the core-js
[modules](https://github.com/zloirock/core-js/tree/master/modules) directory.

