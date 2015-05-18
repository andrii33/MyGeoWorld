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

//--------------------------Main page-------------------------/
Route::get('/', 'MainPageController@getMainPage');
//------------------------------------------------------------/

//--------------------Maps list page---------------------------/
Route::get('/maps', 'MainMapsController@getMainMapsPage');
//------------------------------------------------------------/

//-------------------Map page-----------------------------------/
Route::get('/map', 'MapController@getMap');
//--------------------------------------------------------------/


//-----------------Dashboard page -------------------------------/
Route::get('/dashboard', 'DashboardController@getDashboard');
Route::any('upload-file', 'DashboardController@uploadFile');
Route::any('/create-group', 'DashboardController@createGroup');
Route::get('/show-map', 'DashboardController@showMap');
Route::get('/delete-map', 'DashboardController@deleteMap');
Route::get('/make-private-map', 'DashboardController@makePrivateMap');
Route::get('/make-public-map', 'DashboardController@makePublicMap');
Route::get('/add-category', 'DashboardController@addCategoryById');
Route::get('/delete-category', 'DashboardController@deleteCategoryById');
Route::get('/map-categories', 'DashboardController@getMapCategories');
//------------------------------------------------------------------/


//-------------------------Users pages-----------------------------/
Route::controller('users', 'UsersController');
//----------------------------------------------------------------/