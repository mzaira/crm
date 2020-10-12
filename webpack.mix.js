const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



mix.styles([
    'resources/css/style.css',
    'resources/css/bootstrap-4.4.1.css',
], 'public/src/css/home.css').version();

mix.babel([
    'resources/js/jquery-3.4.1.min.js',
    'resources/js/popper.min.js',
    'resources/js/bootstrap-4.4.1.js',
], 'public/src/js/home.js').version();

mix.js('resources/js/app.js', 'public/src/js/app.js')
    .sourceMaps();