<?php

use Illuminate\Support\Facades\Route;

Route::prefix('utils')->namespace('Utils')->group(function () {
    Route::get('csrf_cookie', 'CsrfCookieController@show');
});
