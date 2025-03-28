<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use App\Http\Middleware\AuthenticateVendor;
use App\Http\Middleware\SanctumCookieAuth;

return Application::configure(basePath: dirname(__DIR__))
->withRouting(
    api: __DIR__.'/../routes/api.php',
    commands: __DIR__.'/../routes/console.php',
    health: '/up',
)
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->append(\Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class);
        $middleware->append(\Illuminate\Session\Middleware\StartSession::class);
        $middleware->append(\Illuminate\View\Middleware\ShareErrorsFromSession::class);
        $middleware->append(\Illuminate\View\Middleware\ShareErrorsFromSession::class);
        $middleware->append(\Illuminate\Http\Middleware\HandleCors::class);
        $middleware->alias([
            'vendor.auth' => \App\Http\Middleware\AuthenticateVendor::class,
            'sanctum.cookie.auth' => \App\Http\Middleware\SanctumCookieAuth::class,
        ]);
        
        
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
