<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::domain('{churchSubdomain}.' . env('SITE_URL'))->group(function () {
    Route::any('{any?}', 'AppController@index')->where('any', '.*');
});
