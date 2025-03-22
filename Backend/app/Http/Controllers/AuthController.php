<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Vendor;
use App\Models\Buyer;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Cookie;


class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['login','register']);
    }

    public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        'is_vendor' => 'required|boolean',
        'remember_me' => 'boolean'
    ]);

    // ✅ Determine model (Vendor or Buyer)
    $model = $request->is_vendor ? Vendor::class : Buyer::class;
    $user = $model::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    // ✅ Remove old tokens
    $user->tokens()->delete();

    // ✅ Set token expiration based on "Remember Me"
    $expirationMinutes = $request->remember_me ? (60 * 24 * 30) : 60; // 30 days or 1 hour
    $token = $user->createToken('auth_token', ['*'], now()->addMinutes($expirationMinutes))->plainTextToken;

    // ✅ Create an array of cookies (only when "Remember Me" is checked)

    $response = response()->json([
        'message' => 'Login successful',
        'user' => $user,
        'token' => $token,
        // 'cookie' => $request->cookie('vendor_id') 
    ]);

    // ✅ Set cookies only if "Remember Me" is checked
    if ($request->remember_me) {
        $response->withCookie(cookie(
            'vendor_id',      // Cookie name
            $user->id,        // Cookie value
            $expirationMinutes, // Expiry time (minutes)
            '/',              // Path (root)
            null,             // Domain (null means the current domain)
            true,             // HttpOnly (false = allow access via JavaScript)
            false,            // Raw (should be false)
            'Strict'          // SameSite policy
        ));
    }

    return $response;
}
  

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:buyer,email|unique:vendors,email',
            'password' => 'required|string|min:6',
            'is_vendor' => 'required|boolean'
        ]);

        $model = $request->is_vendor ? Vendor::class : Buyer::class;
        $userData = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ];
        
        if ($request->is_vendor && $request->phone_number) {
            $userData['phone_number'] = $request->phone_number;
        }
        
        $user = $model::create($userData);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully!',
            'token' => $token,
            'user' => $user
        ], 201);
    }

    public function logout(Request $request)
{
    // ✅ Get authenticated vendor or user
    $user = $request->user;

    if (!$user) {
        return response()->json(['message' => 'Unauthorized'], 401);
    }
    // $user->tokens()->delete();
    //forget the cookie
        
    return response()->json([
        'success' => true,
        'message' => 'Logged out successfully!',
        'cookie' => 'deleted'
    ])->withCookie(Cookie::forget('vendor_id'));
    
    
}
    
}
