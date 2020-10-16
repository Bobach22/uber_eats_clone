<?php

use App\Http\Controllers\MealController;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('restaurants',RestaurantController::class);
Route::apiResource('menus',MenuController::class);
Route::apiResource('orders',OrderController::class);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
