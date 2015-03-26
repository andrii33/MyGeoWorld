<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

//Route::get('/', function()
//{
//	return View::make('hello');
//});
Route::get('/', 'BootStrapController@getTest');
/*
 *Bootstrap test
 */
//Route::get('/bootstrap', function()
//{
//	return View::make('bootstrap');
//});
Route::controller('bootstrap', 'BootStrapController');

Route::controller('users', 'UsersController');