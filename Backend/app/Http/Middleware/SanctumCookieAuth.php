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
        // ✅ Get token from the cookie
        $token = $request->cookie('sanctum_token');

        // ✅ Check if token exists
        if (!$token) {
            return response()->json(['error' => 'Token not found'], 401);
        }

        // ✅ Retrieve access token from database
        $accessToken = PersonalAccessToken::findToken($token);

        // ✅ Validate token and associated user
        if (!$accessToken || !$accessToken->tokenable) {
            return response()->json([
                'error' => 'Invalid token',
                'token' => $token, // Show token for debugging (Remove in production)
            ], 401);
        }

        // ✅ Authenticate user
        Auth::guard('vendors')->setUser($accessToken->tokenable);

        // ✅ Attach vendor ID to request for easy access
        $request->merge(['vendor_id' => $accessToken->tokenable->id]);

        return $next($request);
    }
}
