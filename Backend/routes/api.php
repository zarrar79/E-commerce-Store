<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VendorController;

// Public Routes
Route::post('/vendor/register', [VendorController::class, 'store']);
Route::post('/vendor/login', [VendorController::class, 'login']);
Route::get('/vendor/products', [VendorController::class, 'show']);
