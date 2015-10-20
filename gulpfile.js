process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');
var imagemin = require('laravel-elixir-imagemin');
var browserify = require('laravel-elixir-browserify');

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

elixir(function(mix) {
    mix.less([
        'components.less',
        'theme.less'
    ], 'public/assets/css/crowdbound.css');
});

elixir(function(mix) {
    mix.scripts(['libs/*.js'], 'public/assets/js/vendor.js')
       .scripts(['flickity-settings.js', 'global.js', 'portfolio-shuffle.js'], 'public/assets/js/crowdbound.js');
});

elixir(function(mix) {
    mix.version(['public/assets/js/crowdbound.js', 'public/assets/js/vendor.js', 'public/assets/css/crowdbound.css']);
});
