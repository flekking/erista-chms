<?php

use Illuminate\Support\Facades\Route;

Route::prefix('utils')->namespace('Utils')->group(function () {
    Route::get('csrf_cookie', 'CsrfCookieController@show');
});

Route::post('log/authentication_log/login', 'Log\\AuthenticationLogController@storeLogin');

Route::middleware('auth:sanctum')->group(function () {

    Route::prefix('log')->namespace('Log')->group(function () {

        Route::prefix('authentication_log')->group(function () {
            Route::post('logout', 'AuthenticationLogController@storeLogout');
        });
    });
});
