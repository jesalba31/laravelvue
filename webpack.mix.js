const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
        'resources/vendor/css/all.min.css',
        'resources/vendor/css/adminlte.min.css',
        'resources/vendor/css/config.css'
    ], 'public/css/plantilla.css')
    .js('resources/js/app.js', 'public/js').vue()
    .scripts([
        'resources/vendor/js/jquery/jquery.min.js',
        'resources/vendor/js/bootstrap/js/bootstrap.bundle.min.js',
        'resources/vendor/js/adminlte.js',
        'resources/vendor/js/demo.js'
    ], 'public/js/plantilla.js')
    .copy('resources/vendor/fontawesome/webfonts', 'public/webfonts')
    .copy('resources/vendor/img', 'public/img');

