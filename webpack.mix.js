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


mix.js('resources/js/app.js',
      'public/src/js/app.js')
.version();

mix.styles([
    'resources/css/style.css',
    'resources/css/bootstrap-4.4.1.css',
    'resources/vendors/toastr/toaster-box.css',
], 'public/src/css/home.css').version();

mix.js('resources/js/administrator.js',
      'public/src/js/administrator.js')
.version();

mix.babel([
    'resources/js/jquery-3.4.1.min.js',
    'resources/js/popper.min.js',
    'resources/js/bootstrap-4.4.1.js',
    'resources/vendors/toastr/toaster-box.js',
], 'public/src/js/home.js').version();

// administrator
mix.styles([
    'resources/dashboard/assets/vendor/nucleo/css/nucleo.css',
    'resources/dashboard/assets/vendor/dropzone/dist/dropzone.css',
    'resources/dashboard/assets/css/argon.css',
], 'public/src/css/dashboard.css').version();





mix.babel([
    // 'resources/dashboard/assets/vendor/jquery/dist/jquery.min.js',
    'resources/js/jquery-3.4.1.min.js',
    'resources/dashboard/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
    'resources/dashboard/assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js',
    'resources/dashboard/assets/vendor/chart.js/dist/Chart.min.js',
    'resources/dashboard/assets/vendor/chart.js/dist/Chart.extension.js',
    'resources/dashboard/assets/js/argon.js',
], 'public/src/js/dashboard.js').version();


mix.babel('resources/dashboard/assets/vendor/dropzone/dist/dropzone.js',
      'public/src/js/dropzone.js')
.version();

mix.styles(['resources/vendors/uploader/fine-uploader-new.css',
          'resources/vendors/uploader/fine-uploader.min.css'],
           'public/src/css/fineuploader.css').version();

mix.babel('resources/vendors/uploader/jquery.fine-uploader.js',
'public/src/js/fine-uploader.js')
.version();


