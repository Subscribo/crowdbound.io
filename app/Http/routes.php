<?php

/*
|--------------------------------------------------------------------------
| Frotend/Marketing Site Routes
|--------------------------------------------------------------------------
|
| Routes for the customer-facinng marketing website.
|
*/
Route::get('/', function () {
    return view('index');
});

Route::get('agents', function () {
    return view('agents');
});

Route::get('api', function () {
    return view('api');
});

Route::get('success-stories', function () {
    return view('success-stories');
});

Route::get('agent-app', function () {
    return view('agent-app');
});

Route::get('campaign-planner-app', function () {
    return view('campain-planner-app');
});

Route::get('campaign-templates', function () {
    return view('campaign-templates');
});

Route::get('reporting', function () {
    return view('reporting');
});

Route::get('integrations', function () {
    return view('integrations');
});

Route::get('about-us', function () {
    return view('about-us');
});

Route::get('imprint', function () {
    return view('imprint');
});

Route::get('press', function () {
    return view('press');
});


/*
|--------------------------------------------------------------------------
| Blog Related Routes
|--------------------------------------------------------------------------
|
| @TODO: Standard and custom routes for our Blog.
|
*/
Route::get('blog', function () {
    return view('index');
});


/*
|--------------------------------------------------------------------------
| Laravel Spark Related Routes
|--------------------------------------------------------------------------
|
| Standard and custom routes for Spark.
|
*/

Route::get('spark', function () {
	return view('spark::welcome');
});

Route::get('home', ['middleware' => 'auth', function () {
	return view('home');
}]);


/*
|--------------------------------------------------------------------------
| Internal Documentation Routes
|--------------------------------------------------------------------------
|
| Internal style-guides an other documenation regardin this project itself.
|
*/

Route::get('/docs/ui-kit', function () {
    return view('_documentation/ui-kit');
});

Route::get('/docs/components', function () {
    return view('_documentation/components');
});
