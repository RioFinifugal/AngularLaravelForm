<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SubmitController;
use App\Http\Controllers\ProductController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//submit and add data to SQL table 
Route::post('/submit', [SubmitController::class, 'store']);
//fetch data to display in HTML form
Route::apiResource('/submits', ProductController::class);
//update data that user edited in HTML form
Route::put('/submit/{id}', [SubmitController::class, 'update']);
//delete on button click
Route::delete('/submit/{id}', [SubmitController::class, 'destroy']);