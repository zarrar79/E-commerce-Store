<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Vendor;
use App\Models\User;
use Illuminate\Routing\Controller;


class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['login','register']);
    }

    public function login(Request $request)
    {
        if (auth('sanctum')->user()) {
            return response()->json(['message' => 'Already logged in'], 200);
        }

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'is_vendor' => 'required|boolean'
        ]);

        $model = $request->is_vendor ? Vendor::class : User::class;
        $user = $model::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user->tokens()->delete();  // Remove old tokens

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email|unique:vendors,email',
            'password' => 'required|string|min:6',
            'is_vendor' => 'required|boolean'
        ]);

        $model = $request->is_vendor ? Vendor::class : User::class;
        $user = $model::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully!',
            'token' => $token,
            'user' => $user
        ], 201);
    }

    public function logout(Request $request)
    {
        if (!$request->user()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logged out successfully!',
            'token' => $request->user()->currentAccessToken()
        ], 200);
    }
}
