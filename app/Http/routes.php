<?php

/*
|--------------------------------------------------------------------------
| Localized Frontend/Marketing Site Routes
|--------------------------------------------------------------------------
|
| Routes for the customer-facinng marketing website. This are localized
| via the laravel-localization package.
|
*/
Route::group(
[
    'prefix' => LaravelLocalization::setLocale(),
    'middleware' => [ 'localize', 'localeSessionRedirect', 'localizationRedirect' ]
],
function()
{
    Route::get('/', function () {
        return view('index');
    });

    /* All of the following routes are translateable
       via resources/lang/[LANGUAGE]/routes.php */

    Route::get(LaravelLocalization::transRoute('routes.agents'), function () {
        return view('agents');
    });

    Route::get(LaravelLocalization::transRoute('routes.api'), function () {
        return view('api');
    });

    Route::get(LaravelLocalization::transRoute('routes.success-stories'), function () {
        return view('success-stories');
    });

    Route::get(LaravelLocalization::transRoute('routes.agent-app'), function () {
        return view('agent-app');
    });

    Route::get(LaravelLocalization::transRoute('routes.campaign-planner-app'), function () {
        return view('campain-planner-app');
    });

    Route::get(LaravelLocalization::transRoute('routes.campaign-templates'), function () {
        return view('campaign-templates');
    });

    Route::get(LaravelLocalization::transRoute('routes.reporting'), function () {
        return view('reporting');
    });

    Route::get(LaravelLocalization::transRoute('routes.integrations'), function () {
        return view('integrations');
    });

    Route::get(LaravelLocalization::transRoute('routes.about-us'), function () {
        return view('about-us');
    });

    Route::get(LaravelLocalization::transRoute('routes.imprint'), function () {
        return view('imprint');
    });

    Route::get(LaravelLocalization::transRoute('routes.press'), function () {
        return view('press');
    });
});


/*
|--------------------------------------------------------------------------
| Password-Protected Customer Backend Routes
|--------------------------------------------------------------------------
|
| We don't localize them because it's a pain in the ass and has no SEO
| or other noticeable advantages whatsover.
|
*/

Route::group(['middleware' => 'auth'], function () {

    Route::get('my-campaigns', function () {
        dd('TODO');
    });

    Route::get('templates/campaigns', function () {
        return view('app/templates/campaigns');
    });

    Route::get('templates/emails', function () {
        dd('TODO');
    });

});


/*
|--------------------------------------------------------------------------
| Social Login Related Routes
|--------------------------------------------------------------------------
|
| Routes that facilitate social login via eloquent-oauth.
|
*/

Route::get('{provider}/authorize', function ($provider) {
    return SocialAuth::authorize($provider);
});

Route::get('{provider}/login', function ($provider) {
    SocialAuth::login($provider, function ($user, $userDetails) {
        dd($userDetails);
    });
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
    dd('TODO');
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
| Internal style-guides and other documenation regardinig
| this project itself.
|
*/

Route::get('/docs/ui-kit', function () {
    return view('_documentation/ui-kit');
});

Route::get('/docs/components', function () {
    return view('_documentation/components');
});
