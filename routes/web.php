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


Route::get('/login', function() {
   return redirect(route('home.login'));
});

Route::get('register','HomeController@register')->name('home.register');
Route::get('/','HomeController@login')->name('home.login');
Route::get('logout', 'HomeController@logout')->name('home.logout');
Route::post('registers', 'HomeController@submit_register')->name('register.submit');


Route::prefix('auth')->group(function() {
   Route::post('login', 'HomeController@submit_login')->name('login.submit');
   Route::post('password', 'HomeController@submit_password')->name('home.password.submit');
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
      Route::get('/', 'HomeController@leave_request_page')->name('admin.leave_request');
   });

   Route::prefix('projects')->group(function() {
      Route::get('/', 'HomeController@project_page')->name('admin.projects');
   });

   Route::prefix('documents')->group(function() {
      Route::get('/', 'HomeController@document_page')->name('admin.documents');
      Route::post('/', 'HomeController@save_document')->name('admin.save_document');
      Route::post('upload', 'HomeController@upload_document')->name('admin.upload_document');
   });

   Route::prefix('meeting_minutes')->group(function() {
      Route::get('/', 'HomeController@meeting_minutes_page')->name('admin.meeting_minutes_page');
      Route::post('/', 'HomeController@save_minutes')->name('admin.save_minutes');
      Route::post('upload', 'HomeController@upload_minutes')->name('admin.upload_minutes');
   });

   Route::prefix('presentations')->group(function() {
      Route::get('/', 'HomeController@presentation_page')->name('admin.presentations');
      Route::post('/', 'HomeController@save_presentation')->name('admin.save_presentation');
      Route::post('upload', 'HomeController@upload_presentation')->name('admin.upload_presentation');
   });


});

Route::prefix('my')->namespace('Client')->group(function() {

   Route::get('/', 'HomeController@index')->name('client.index');

   Route::prefix('presentation')->group(function() {
      Route::get('/', 'HomeController@presentations')->name('client.presentation');
   });

   Route::prefix('meeting-minutes')->group(function() {
      Route::get('/', 'HomeController@meeting_minutes')->name('client.meeting_minutes');
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