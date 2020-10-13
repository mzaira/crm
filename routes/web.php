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

Route::get('/', function () {
   return redirect(route('home.login'));
});

Route::get('login','HomeController@login')->name('home.login');

Route::prefix('administrator')->namespace('Administrator')->group(function() {
   Route::get('/', 'HomeController@index')->name('admin.home');
});

Route::prefix('client')->namespace('Client')->group(function() {
   Route::get('/', 'HomeController@index');
});

Route::prefix('staff')->namespace('Staff')->group(function() {
   Route::get('/', 'HomeController@index');
});