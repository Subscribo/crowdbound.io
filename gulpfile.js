process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');
var imagemin = require('laravel-elixir-imagemin');


/*
 |--------------------------------------------------------------------------
 | Backend/User-Area  Stuff
 |--------------------------------------------------------------------------
 */

elixir(function(mix) {
    mix.sass(['laravel-spark/app.scss'], 'public/assets/css/laravel-spark-app.css')
       .browserify(['laravel-spark-app.js'], 'public/assets/js/laravel-spark-app.js');
});

elixir(function(mix) {
    mix.browserify(['winterfell.js'], 'public/assets/js/winterfell.js');
});


/*
 |--------------------------------------------------------------------------
 | Frontend/CSS/Marketing-Website Stuff
 |--------------------------------------------------------------------------
 */

elixir(function(mix) {
    mix.less([
        'components.less',
        'theme.less'
    ], 'public/assets/css/crowdbound.css');
});

elixir(function(mix) {
     mix.browserify(['flickity-settings.js', 'crowdbound.js', 'portfolio-shuffle.js'], 'public/assets/js/crowdbound.js');
});


/*
 |--------------------------------------------------------------------------
 | Versioning / Cache-Busting
 |--------------------------------------------------------------------------
 */

elixir(function(mix) {
    mix.version([
        'public/assets/js/crowdbound.js',
        'public/assets/js/winterfell.js',
        'public/assets/js/laravel-spark-app.js',
        'public/assets/css/crowdbound.css',
        'public/assets/css/laravel-spark-app.css'
    ]);
});
