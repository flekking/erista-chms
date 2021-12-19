<?php

use Illuminate\Support\Facades\Route;

Route::domain('{churchSubdomain}.' . env('SITE_URL'))->group(function () {
    Route::prefix('utils')->namespace('Utils')->group(function () {
        Route::get('csrf_cookie', 'CsrfCookieController@show');
        Route::get('authenticated', 'AuthenticatedController@index');
    });

    Route::post('log/authentication_log/login', 'Log\\AuthenticationLogController@storeLogin');

    Route::middleware(['auth:web', 'auth.container'])->group(function () {

        Route::prefix('log')->namespace('Log')->group(function () {

            Route::prefix('authentication_log')->group(function () {
                Route::post('logout', 'AuthenticationLogController@storeLogout');
            });
        });
    });
});
