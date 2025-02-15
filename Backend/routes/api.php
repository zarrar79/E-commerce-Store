<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VendorController;

Route::prefix('vendor')->group(function (){
    Route::post('/register', [VendorController::class, 'store']);
    Route::post('/login', [VendorController::class, 'login']);

    Route::middleware(['vendor.auth'])->group(function () {
        Route::post('/', [VendorController::class, 'show']);
        Route::post('/addProduct', [VendorController::class, 'addProduct']);
        Route::post('/logout', [VendorController::class, 'logout']);
        Route::post('/deleteProduct/{id}', [VendorController::class, 'deleteProduct']);
        Route::get('/editProduct/{id}', [VendorController::class, 'getProduct']);
        Route::put('/updateProduct/{id}', [VendorController::class, 'updateProduct']);
        Route::get('/dashboard', [VendorController::class, 'dashboard']);
    });
});

