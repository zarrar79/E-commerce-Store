<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticateVendor
{
    public function handle(Request $request, Closure $next)

    {
        if (!auth('sanctum')->check()){
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized access. Please log in.',
            ], 401);
        }

        // Attach the authenticated vendor to the request
        $request->merge(['vendor' => auth('sanctum')->user()]);

        return $next($request);
    }
}

