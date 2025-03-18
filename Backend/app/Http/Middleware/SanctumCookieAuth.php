<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class SanctumCookieAuth
{
    public function handle(Request $request, Closure $next)
    {
        $token = $request->cookie('sanctum_token');

        \Log::info('Vendor ID from cookie:', ['vendor_id' => $token]);

        if (!$token) {
            return response()->json(['error' => 'Token not found'], 401);
        }

        $accessToken = PersonalAccessToken::findToken($token);

        if (!$accessToken || !$accessToken->tokenable) {
            return response()->json(['error' => 'Invalid token'], 401);
        }

        Auth::guard('vendors')->setUser($accessToken->tokenable);

        $request->merge(['vendor_id' => $accessToken->tokenable->id]);

        return $next($request);
    }
}
