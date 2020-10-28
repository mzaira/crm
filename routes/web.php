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

Route::get('/','HomeController@login')->name('home.login');
Route::post('auth/submit', 'HomeController@submit_login')->name('home.login.submit');
Route::post('auth/password', 'HomeController@submit_password')->name('home.password.submit');

Route::prefix('auth', function() {
});

Route::prefix('administrator')->namespace('Administrator')->group(function() {

   Route::get('/', 'HomeController@index')->name('admin.home');

   Route::prefix('clients')->group(function() {
      Route::get('/', 'HomeController@client_page')->name('admin.client');
   });

   Route::prefix('employees')->group(function() {
      Route::get('/', 'HomeController@employee_page')->name('admin.employee');
   });

   Route::prefix('leave_request')->group(function() {
      Route::get('/', 'HomeController@employee_page')->name('admin.leave_request');
   });

   Route::prefix('projects')->group(function() {
      Route::get('/', 'HomeController@employee_page')->name('admin.projects');
   });

   Route::prefix('domains')->group(function() {
      Route::get('/', 'HomeController@employee_page')->name('admin.domains');
   });

   Route::prefix('documents')->group(function() {
      Route::get('/', 'HomeController@employee_page')->name('admin.documents');
   });

   Route::prefix('tickets')->group(function() {
      Route::get('/', 'HomeController@employee_page')->name('admin.tickets');
   });

});

Route::prefix('client')->namespace('Client')->group(function() {

   Route::get('/', 'HomeController@index')->name('client.index');

   Route::prefix('presentation')->group(function() {
      Route::get('/', 'HomeController@presentation_page')->name('client.presentation');
   });

   Route::prefix('meeting-minutes')->group(function() {
      Route::get('/', 'HomeController@meeting_minutes')->name('client.meeting_minutes');
   });

   Route::prefix('tickets')->group(function() {
      Route::get('/', 'HomeController@tickets')->name('client.tickets');
   });

   Route::prefix('documents')->group(function() {
      Route::get('/', 'HomeController@documents')->name('client.documents');
   });

});


Route::prefix('staff')->namespace('Staff')->group(function() {

   Route::get('/', 'HomeController@index')->name('staff.home');

   Route::prefix('leave')->group(function() {
      Route::get('/', 'HomeController@index')->name('staff.leave');
   });

   Route::prefix('tickets')->group(function() {
      Route::get('/', 'HomeController@index')->name('staff.tickets');
   });

   Route::prefix('bulletin')->group(function() {
      Route::get('/', 'HomeController@index')->name('staff.bulletin');
   });

});