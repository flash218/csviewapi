const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    /*mix.sass('app.scss')
       .webpack('app.js');*/


    //
    mix.styles([
        'resources/assets/amazeui/css/admin.css',
    ], 'public/css/admin.css', './');

//
    mix.styles([
        'resources/assets/amazeui/css/lw-admin.css',
    ], 'public/css/lw-admin.css', './');

    mix.styles([
        'resources/assets/amazeui/css/amazeui.css',
        'resources/assets/amazeui/css/amazeui.flat.css',
        'resources/assets/amazeui/css/app.css',
    ], 'public/css/all.css', './');

//
    mix.scripts([
        'resources/assets/amazeui/js/amazeui.ie8polyfill.js',
        'resources/assets/amazeui/js/amazeui.js',
        'resources/assets/amazeui/js/amazeui.widgets.helper.js',
        'resources/assets/amazeui/js/app.js',
        'resources/assets/amazeui/js/handlebars.min.js',
        'resources/assets/amazeui/js/jquery.waterfall.min.js',
        'resources/assets/amazeui/js/pinto.min.js'
    ], 'public/js/all.js', './');

    mix.scripts([
        'resources/assets/amazeui/js/jquery.min.js'
    ], 'public/js/jquery.js', './');

//
    mix.version(['css/all.css','css/admin.css','css/lw-admin.css', 'js/all.js','js/jquery.js'], 'public/build');

    mix.copy('resources/assets/amazeui/fonts', 'public/build/fonts');
    mix.copy('resources/assets/amazeui/i', 'public/build/i');


});
