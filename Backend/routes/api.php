<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VendorController;


    Route::post('/vendor/addProduct', [VendorController::class, 'addProduct']);


Route::post('/vendor/register', [VendorController::class, 'store']);
Route::post('/vendor/login', [VendorController::class, 'login']);
