<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Vendor;
use App\Models\Buyer;
use Illuminate\Routing\Controller;


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
        $expiration = $request->remember_me ? now()->addDays(30) : now()->addHours(1);
        $token = $user->createToken('auth_token', ['*'], $expiration)->plainTextToken;
    
        // ✅ Create an array of cookies
$cookies = [
    cookie('sanctum_token', $token, $request->remember_me ? 60 * 24 * 30 : 60, '/', null, true, true, false, 'Strict'),
    cookie('vendor_id', $user->id, 60 * 24 * 30, '/', null, true, true, false, 'Strict')
];

// ✅ Return response with multiple cookies
return response()->json([
    'message' => 'Login successful',
    'user' => $user,
    'token' => $token,
])->withCookies($cookies);
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
        $vendor = Auth::guard('vendors')->user();
        if (!$request->user()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        if ($vendor) {
            $vendor->tokens()->delete(); // Revoke all tokens
            $request->user()->currentAccessToken()->delete();
        }

        return response()->json([
            'success' => true,
            'message' => 'Logged out successfully!',
            'token' => $request->user()->currentAccessToken()
        ], 200);
    }
}
