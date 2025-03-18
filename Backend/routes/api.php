<?php

use Illuminate\Http\Request;
use App\Http\Controllers\MailController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StripePaymentController;
use App\Http\Controllers\Auth\GoogleController;
use Illuminate\Support\Facades\App;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::prefix('vendor')->group(function (){
    Route::middleware(['vendor.auth', 'sanctum.cookie.auth'])->group(function () {
        Route::post('/', [VendorController::class, 'show']);
        Route::post('/addProduct', [VendorController::class, 'addProduct']);
        Route::post('/deleteProduct/{id}', [VendorController::class, 'deleteProduct']);
        Route::get('/editProduct/{id}', [VendorController::class, 'getProduct']);
        Route::put('/updateProduct/{id}', [VendorController::class, 'updateProduct']);
        Route::get('/dashboard', [VendorController::class, 'dashboard']);
    });
    
});

    Route::middleware(['vendor.auth'])->group(function () {
        Route::get('/wishlist', [WishlistController::class, 'index']);
        Route::post('/addToWishlist', [WishlistController::class, 'store']);
        Route::delete('/wishlist/{id}', [WishlistController::class, 'destroy']);
    });
    Route::get('/', [ProductController::class, 'index']);
    Route::post('/send-email', [MailController::class, 'sendEmail']);

    Route::get('/payment', [StripePaymentController::class, 'processPayment']);
    Route::get('/payment-success', [StripePaymentController::class, 'paymentSuccess'])->name('payment.success');
Route::get('/payment-cancel', [StripePaymentController::class, 'paymentCancel'])->name('payment.cancel');
Route::get('auth/google', [GoogleController::class, 'redirectToGoogle']);
Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);


Route::get('/translations/{locale}', function ($locale) {
    App::setLocale($locale);
    return response()->json([
        'translations' => trans('messages')
    ]);
});



